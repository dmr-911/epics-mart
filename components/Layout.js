import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return (
    <div>
      <div className="layout">
        <Head>Epix</Head>
        <header>
          <Navbar/>
        </header>
        <main className="main-container">
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
