import React from 'react';
import tops_banner from '../Assets/banners/top_banner.png';
import bottoms_banner from '../Assets/banners/bottom_banner.png';
import set_banner from '../Assets/banners/set_banner.png';
import accessories_banner from '../Assets/banners/accessory_banner.png';
import shoes_banner from '../Assets/banners/shoes_banner.png';
import bags_banner from '../Assets/banners/bag_banner.png';
import dresses_banner from '../Assets/banners/dress_banner.png';
import outerwear_banner from '../Assets/banners/outerwear_banner.png';

export const SidebarData = [
  {
    title: "Home",
    icon: <i className="fa-solid fa-house"></i>,
    link: "/",
  },
  {
    title: "Popular",
    icon: <i className="fa-solid fa-fire-flame-curved"></i>,
    link: "/popular",
  },
  {
    title: "New In",
    icon: <i className="fa-solid fa-cube"></i>,
    link: "/new_in",
  },
  {
    title: "Tops",
    icon: <i className="fa-solid fa-shirt"></i>,
    link: "/tops",
    category: "tops",
    image: tops_banner,
  },
  {
    title: "Bottoms",
    icon: <i className="fa-solid fa-person"></i>,
    link: "/bottoms",
    category: "bottoms",
    image: bottoms_banner,
  },
  {
    title: "Dresses",
    icon: <i className="fa-solid fa-person-dress"></i>,
    link: "/dresses",
    category: "dresses",
    image: dresses_banner,
  },
  {
    title: "Full Sets",
    icon: <i className='fa-solid fa-star'></i>,
    link: "/sets",
    category: "sets",
    image: set_banner,
  },
  {
    title: "Outerwear",
    icon: <i className='fa solid fa-vest'></i>,
    link: "/outerwear",
    category: "outerwear",
    image: outerwear_banner,
  },
  {
    title: "Shoes",
    icon: <i className="fa-solid fa-shoe-prints"></i>,
    link: "/shoes",
    category: "shoes",
    image: shoes_banner,
  },
  {
    title: "Accessories",
    icon: <i className="fa-solid fa-glasses"></i>,
    link: "/accessories",
    category: "accessories",
    image: accessories_banner,
  },
  {
    title: "Bags",
    icon: <i className="fa-solid fa-bag-shopping"></i>,
    link: "/bags",
    category: "bags",
    image: bags_banner,
  },
]