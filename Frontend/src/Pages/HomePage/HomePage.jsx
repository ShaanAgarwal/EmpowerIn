import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import HomePage2 from "../../Components/HomePage2/HomePage2";
import HomePageTop from "../../Components/HomePage/HomePageTop/HomePageTop";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HomePageTop />
      <HomePage2 />
      <Footer />
      
    </>
  );
};

export default HomePage;
