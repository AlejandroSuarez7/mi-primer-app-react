import React from "react";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import Footer from "./components/Footer.jsx";
import Slogan from"./components/eslogan.jsx"

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Slogan />
      <main>
        <ProductList />
      </main>
      <Footer />
      
    </div>
    </>
  );
}

export default App;
