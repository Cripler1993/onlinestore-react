import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://65524c665c69a7790329d96f.mockapi.io/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <main className="main__row">
          <Filter />
          <Catalog products={products} />
        </main>
      </div>
      <Footer />
    </>
  );
}
