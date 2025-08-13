import React from "react";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
