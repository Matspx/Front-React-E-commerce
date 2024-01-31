import React, { Fragment } from "react";
import './Cart.css'

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { TextField } from "@mui/material";

const Cart = () => {

    return(
        <Fragment>
            <Nav />
            <div className="cart-container">
                <h2>Cart</h2>
                <div className="row">
                    <Button variant="text">Continue Shopping</Button>
                    <div className="row-links">
                        <Link href="#">Shopping Bag</Link>
                        <Link href="#">Wish List</Link>
                    </div>
                    <Button variant="outlined">Checkout Now</Button>
                </div>
                <div className="row">
                    <div className="cart-list">
                        <div className="cart-product-container">
                            <div className="cart-product-img">
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                            </div>
                            <div className="cart-product-info">
                                <div>
                                    <p>Product:</p>
                                    <span>JEssie</span>
                                </div>
                                <div>
                                    <p>ID:</p>
                                    <span>994949</span>
                                </div>
                                <div>
                                    <div className="product-color"></div>
                                </div>
                                <div>
                                    <p>Size:</p>
                                    <span>35</span>
                                </div>
                            </div> 
                            <div className="cart-product-amount">
                                <TextField
                                    id="outlined-number"
                                    label="Quantity"
                                    type="number"
                                    defaultValue='1'
                                    InputProps={{ inputProps: { min: 1, max: 100 } }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <p>R$ 30,00</p>
                            </div>                           
                        </div>

                    <hr/>
                    </div>
                    <div className="cart-summary">
                        <h4>Order Summary</h4>
                        <div>
                            <span>Subtotal</span>
                            <span>R$ 80,00</span>
                        </div>
                        <div>
                            <span>Estimated Shipping</span>
                            <span>R$ 5,90</span>
                        </div>
                        <div>
                            <span>Shipping Discount</span>
                            <span>R$ -5,90</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>R$ 80,00</span>
                        </div>
                        <Button variant="outlined">Checkout Now</Button>

                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
        
    )
}

export default Cart