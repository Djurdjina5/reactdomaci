import './App.css';
import { Main } from './components/Main';
import Products from './components/Products';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
   const [products, setProducts] = useState([
      {
      id: 1,
      url: "https://d2j6dbq0eux0bg.cloudfront.net/images/16197139/1971153906.jpg",
      title: "illy intenso",
      description:
           " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
         amount: 0,
    },
    {
      id: 2,
      url:"https://tuttocapsulebelgrade.com/wp-content/uploads/2021/01/nespresso-capsules-forte-extra-bold-roast1.jpg",
      title: "illy forte",
      description:
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
     price:"455,00",
      amount: 0,
    },
    {
      id: 3,
      url: "https://www.nespresso.rs/files/thumbs/files/files/thumbs_600/SRB-Premium_Selection_1200x12001_600_600px.png.webp",
      title: "Nespresso Premium",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
         amount: 0,
    },
     {
      id: 4,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/mug_800_800px.jpg",
      title: "Nespresso Miami",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
         amount: 0,
    },
      {
      id: 5,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/7762-80_2_800_800px.png.webp",
      title: "Nespresso Chiaro",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
         amount: 0,
    },
      {
      id: 6,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/mug_800_800px.jpg",
      title: "Nespresso Miami",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
         amount: 0,
    },
     {
      id: 7,
      url: "https://d2j6dbq0eux0bg.cloudfront.net/images/16197139/1971153906.jpg",
      title: "illy intenso",
      description:
           " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
         amount: 0,
    },
    {
      id: 8,
      url:"https://tuttocapsulebelgrade.com/wp-content/uploads/2021/01/nespresso-capsules-forte-extra-bold-roast1.jpg",
      title: "illy forte",
      description:
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
     price:"455,00",
      amount: 0,
    },
    {
      id: 9,
      url: "https://www.nespresso.rs/files/thumbs/files/files/thumbs_600/SRB-Premium_Selection_1200x12001_600_600px.png.webp",
      title: "Nespresso Premium",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
         amount: 0,
    },
     {
      id: 10,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/mug_800_800px.jpg",
      title: "Nespresso Miami",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
         amount: 0,
    },
      {
      id: 11,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/7762-80_2_800_800px.png.webp",
      title: "Nespresso Chiaro",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
         amount: 0,
    },
      {
      id: 12,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/mug_800_800px.jpg",
      title: "Nespresso Miami",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
         amount: 0,
    }
  ]);
  function refreshCart() {
    let newProducts = products.filter((product) => product.amount > 0);
    setCartProducts(newProducts);
  }
  function addToCart(id) {
    setCartNum(cartNum + 1);
    products.forEach((product) => {
      if (product.id === id) {
        product.amount++;
      }
    });
    refreshCart();
  }
  function removeFromCart(id) {
    products.forEach((product) => {
      if (product.id === id) {
        if (product.amount > 0) {
          product.amount--;
          setCartNum(cartNum - 1);
        }
      }
    });
    refreshCart();
  }
  return (
  <BrowserRouter className="App">
    <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
        path="/"
        element={
        <Products
          products={products} 
          onAdd={addToCart}  
          onRemove={removeFromCart}/>}
        />
        <Route 
        path="/cart" element={
        <Cart 
        products={cartProducts}
        onAdd={addToCart} 
        onRemove={removeFromCart}/>}
        />
      </Routes>
    </BrowserRouter>

  );
  }

export default App;
