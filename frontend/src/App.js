import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Shop } from './Pages/Shop';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { Category } from './Pages/Category';
import { SidebarData } from './Components/Sidebar/SidebarData';
import { Footer } from './Components/Footer/Footer';
import { PopularPage } from './Pages/PopularPage';
import { NewIn } from './Pages/NewIn';
import { useState } from 'react';
import { Search } from './Pages/Search';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <InnerApp isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </BrowserRouter>
  );
}

function InnerApp({ isSidebarOpen, toggleSidebar }) {
  const location = useLocation(); // Now this is valid

  const isLoginPage = location.pathname === '/login';

  return (
    <div className='App'>
      <div className={isLoginPage ? 'hide-login' : ''} >
        <Header className={isLoginPage ? 'hide-login' : ''} toggleSidebar={toggleSidebar} />
      </div>
      <div className='main-container'>
        <div className={isLoginPage ? 'hide-login' : ''} >
          <Sidebar isOpen={isSidebarOpen} />
        </div>
        <div className={`content ${isSidebarOpen ? 'open' : 'closed'}`}>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/search' element={<Search />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/popular' element={<PopularPage />} />
            <Route path='/new_in' element={<NewIn />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            {SidebarData.slice(3, 11).map((val, key) => (
              <Route key={key} path={val.link} element={<Category banner={val.category + 'banner'} category={val.category} />} />
            ))}
          </Routes>
        </div>
      </div>
      <div className={`footer ${isSidebarOpen ? 'open' : 'closed'} ${isLoginPage? 'hide-login' : ''}`}>
        <Footer />
      </div>
    </div>
  );
}

export default App;