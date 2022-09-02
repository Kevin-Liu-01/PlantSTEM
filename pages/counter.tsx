import Head from "next/head";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import React from "react";
function CounterPage() {
  return (
    <>
      <Counter />

      <Footer></Footer>
    </>
  );
}

export default CounterPage;
