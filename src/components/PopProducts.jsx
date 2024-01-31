import React from "react";
import './PopProducts.css'
import { popularProducts } from "../data"

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PopProducts = () => {

    return(
        <div className="pop-products">
            {
                popularProducts.map(item => {

                    return(
                        <div className="product-card" key={item.id}>
                            <div className="circle-product"></div>
                            <div className="info-product">
                                <a href="/" className="info-p">
                                    <SearchOutlinedIcon />
                                </a>
                                <a href="/" className="add-cart">
                                    <ShoppingCartOutlinedIcon />
                                </a>
                                <a href="/" className="fav-product">
                                    <FavoriteBorderIcon />
                                </a>
                            </div>
                            <img src={item.img} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PopProducts