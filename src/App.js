import './App.css';
import { Main } from './components/Main';
import Products from './components/Products';
import NavBar from './components/NavBar';
import { useState } from "react";

function App() {
   const [products, setProducts] = useState([
      {
      id: 1,
      url: "https://d2j6dbq0eux0bg.cloudfront.net/images/16197139/1971153906.jpg",
      title: "illy intenso",
      description:
           " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
    },
    {
      id: 2,
      url:"https://tuttocapsulebelgrade.com/wp-content/uploads/2021/01/nespresso-capsules-forte-extra-bold-roast1.jpg",
      title: "illy forte",
      description:
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
     price:"455,00",
    },
    {
      id: 3,
      url: "https://www.nespresso.rs/files/thumbs/files/files/thumbs_600/SRB-Premium_Selection_1200x12001_600_600px.png.webp",
      title: "Nespresso Premium",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
    },
     {
      id: 4,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/mug_800_800px.jpg",
      title: "Nespresso Miami",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
    },
      {
      id: 5,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/7762-80_2_800_800px.png.webp",
      title: "Nespresso Chiaro",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
    },
      {
      id: 6,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/mug_800_800px.jpg",
      title: "Nespresso Miami",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
    },
     {
      id: 7,
      url: "https://d2j6dbq0eux0bg.cloudfront.net/images/16197139/1971153906.jpg",
      title: "illy intenso",
      description:
           " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
    },
    {
      id: 8,
      url:"https://tuttocapsulebelgrade.com/wp-content/uploads/2021/01/nespresso-capsules-forte-extra-bold-roast1.jpg",
      title: "illy forte",
      description:
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
     price:"455,00",
    },
    {
      id: 9,
      url: "https://www.nespresso.rs/files/thumbs/files/files/thumbs_600/SRB-Premium_Selection_1200x12001_600_600px.png.webp",
      title: "Nespresso Premium",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
    },
     {
      id: 10,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/mug_800_800px.jpg",
      title: "Nespresso Miami",
      description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
    },
      {
      id: 11,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/7762-80_2_800_800px.png.webp",
      title: "Nespresso Chiaro",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
    },
      {
      id: 12,
      url: "https://www.nespresso.rs/files/thumbs/files/images/product/thumbs_800/mug_800_800px.jpg",
      title: "Nespresso Miami",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae quam cumque deleniti dolorem.",
        price:"455,00",
    }

  ]);
  return (
    <div className="App">
      <NavBar />
        <Products products={products} />
    </div>
  );
  }

export default App;
