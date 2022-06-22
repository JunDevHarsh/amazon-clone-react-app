import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MenuBar from "./components/Menubar/MenuBar";
import ResultInfoBar from "./components/ResultInfoBar/ResultInfoBar";
import SearchProductResult from "./components/SearchProductResult/SearchProductResult";

function Home() {
  return (
    <>
      <Header />
      <MenuBar />
      <ResultInfoBar />
      <SearchProductResult />
      <Footer />
    </>
  );
}

export default Home;