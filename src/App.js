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
      url: "https://online.idea.rs/images/products/414/414103960_1l.jpg?1655720111",
      title: "Nespresso Miami",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455.00",
         amount: 0,
    },
    {
      id: 2,
      url:"https://tuttocapsulebelgrade.com/wp-content/uploads/2021/01/nespresso-capsules-forte-extra-bold-roast1.jpg",
      title: "illy forte",
      description:
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
     price:"650.00",
      amount: 0,
    },
    {
      id: 3,
      url: "https://www.nespresso.rs/files/thumbs/files/files/thumbs_600/SRB-Premium_Selection_1200x12001_600_600px.png.webp",
      title: "Nespresso Premium",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"3140.00",
         amount: 0,
    },
      {
      id: 4,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/7762-80_2_800_800px.png.webp",
      title: "Nespresso Chiaro",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"710.00",
         amount: 0,
    },
     {
      id: 5,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/mug_800_800px.jpg",
      title: "Nespresso Miami",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"710.00",
         amount: 0,
    },
      {
      id: 6,
      url: "https://tuttocapsulebelgrade.com/wp-content/uploads/2021/01/COMPATIBILI-Capsula-768x768.png",
      title: "Illy Classico",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"650.00",
         amount: 0,
    },
       {
      id: 7,
      url: "https://tuttocapsulebelgrade.com/wp-content/uploads/2021/01/nespresso-capsules-intenso-bold-roast-768x768.jpg",
      title: "illy intenso",
      description:
           " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"650.00",
         amount: 0,
    },
    {
      id: 8,
      url: "https://online.idea.rs/images/products/414/414103953_1.jpg?1655720110",
      title: "CostaCoffee Bright",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455.00",
         amount: 0,
    },
     {
      id: 9,
      url:"https://online.idea.rs/images/products/431/431104001_1l.jpg?1539169867",
      title: "Kafeterija Lija",
      description:
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
     price:"470.00",
      amount: 0,
    },
      {
      id: 10,
      url: "https://online.idea.rs/images/products/414/414103958_1l.jpg?1655720111",
      title: "CostaCoffee Signature",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455.00",
         amount: 0,
    },
      {
      id: 11,
      url: "https://online.idea.rs/images/products/431/431104002_1m.jpg?1539169868",
      title: "Kafeterija Vuk",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"470.00",
         amount: 0,
    },
     {
      id: 12,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/Cosi_22-00_800_800px.png.webp",
      title: "Nespresso Cosi",
      description:
           " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"560.00",
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
      <Routes>
        <Route
        path="/"
        element={
          <Main/>
        }
        />
        <Route
        path="/products"
        element={
          <>
        <NavBar cartNum={cartNum}></NavBar>
        <Products
          products={products} 
          onAdd={addToCart}  
          onRemove={removeFromCart}/>
          </>
          }
        />
        <Route 
        path="/cart" element={
          <>
        <NavBar cartNum={cartNum}></NavBar>
        <Cart 
        products={cartProducts}
        onAdd={addToCart} 
        onRemove={removeFromCart}/>
        </>}
        />
      </Routes>
    </BrowserRouter>

  );
  }

export default App;
