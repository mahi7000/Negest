require('dotenv').config();

const port = process.env.PORT || 4000;
const host = process.env.NODE_ENV === 'production' ? process.env.HOST_URL : `http://localhost:${port}`;

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());
const MONGO_URI = process.env.MONGO_URI;

// Database Connection With MongoDb
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// API Creation

app.get("/", (req, res) => {
    res.send("Express App is Running");
})

// Image Storage

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    },
});

const upload = multer({storage: storage});

app.set("view engine", "ejs");

// Creating Upload Endpoint for images

app.get('/upload', (req, res) => {
    res.render("upload");
});

app.use('/images', express.static('upload/images'))
app.post('/upload', upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `${host}/images/${req.file.filename}`
    })
    console.log(req.file);
    console.log(req.body)
})

// Schema for Creating Products

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    available: {
        type: Boolean,
        default: true,
    },
});

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
    })
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Creating Endpoint for Deleting product

app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({id: req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name,
    })
});

// Creating Endpoint for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

// Schema for Creating Users

const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// Creating Endpoint for registering the user

app.post('/signup', async (req, res) => {
    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success: false, error: "Existing User Found"});
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save();

    const data = {
        user: {
            id: user.id,
        }
    };

    const token = jwt.sign(data, 'secret_ecom');

    res.json({success: true, token})
})

// Creating endpoint for user login

app.post('/login', async (req, res) => {
    let user = await Users.findOne({email: req.body.email});

    if (user) {
        const pass = req.body.password === user.password;
        if (pass) {
            const data = {
                user: {
                    id: user.id,
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success: true, token})
        }
        else {
            res.json({success: false, error: "Wrong Email or Password"})
        }
    }
    else {
        res.json({success: false, error: "Wrong Email or Password"})
    }
})

// Creating endpoint for new in

app.get("/newin", async (req, res) => {
    let products = await Product.find({});
    let newin = products.slice(1).slice(-8);
    console.log("New Fetched")

    res.send(newin);
})

// Creating enpoint for popular

app.get('/popular', async (req, res) => {
    let products = await Product.find({});
    let popular = products.slice(0, 8);
    console.log("popular")
    
    res.send(popular);
})

// Creating middleware to fetch user

const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({errors: "Please Login"})
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors: "Please Login"})
        }
    }
}

// Creating endpoint for cart

app.post('/addtocart', fetchUser, async (req, res) => {
    console.log("Added", req.body.itemId);

    let userData = await Users.findOne({_id: req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});

    res.send("Added");
})

// Creating endpoint to remove from cart

app.post('/removefromcart', fetchUser, async (req, res) => {
    console.log("Removed", req.body.itemId);

    let userData = await Users.findOne({_id: req.user.id});
    if (userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1;
    }
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});

    res.send("Removed");
})

app.post('/removefromcarttotally', fetchUser, async (req, res) => {
    console.log("Removed Totally", req.body.itemId);

    let userData = await Users.findOne({_id: req.user.id});
    if (userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] = 0;
    }
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});

    res.send("Removed");
})

// cart Data

app.post('/getcart', fetchUser, async (req, res) => {
    console.log("Display cart")
    let userData = await Users.findOne({_id: req.user.id});
    res.json(userData.cartData);
})

// listen to port 4000

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    }
    else {
        console.log("Error: " + error);
    }
});
