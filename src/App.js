import React from "react";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./productList/ProductList";

const App = () => {
  return (
    <div>
      <Intro />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
