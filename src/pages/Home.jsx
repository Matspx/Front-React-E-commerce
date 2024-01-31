import React, { Fragment } from "react";

import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import PopProducts from "../components/PopProducts";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
    
    return (
        <Fragment>
            <Nav />
            <Slider />
            <Categories />
            <PopProducts />
            <NewsLetter />
            <Footer />
        </Fragment>
    )
}

export default Home