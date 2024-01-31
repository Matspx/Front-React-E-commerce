import React, { Fragment } from "react";

import Slider from "../components/Slider";
import Categories from "../components/Categories";
import PopProducts from "../components/PopProducts";
import NewsLetter from "../components/Newsletter";

const Home = () => {
    
    return (
        <Fragment>
            <Slider />
            <Categories />
            <PopProducts />
            <NewsLetter />
        </Fragment>
    )
}

export default Home