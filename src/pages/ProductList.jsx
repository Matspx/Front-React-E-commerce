import React, { Fragment } from "react";
import './ProductList.css'

import Nav from "../components/Nav";
import PopProducts from "../components/PopProducts";
import Footer from "../components/Footer";


import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


const ProductList = () => {
    const [size, setSize] = React.useState('None');
    const [color, setColor] = React.useState('None');
    const [sort, setSort] = React.useState('Relevant');

    const handleChangeInput = (event) => {
        if(event.target.name === "Size") setSize(event.target.value);
        else if(event.target.name === "Color") setColor(event.target.value);
        else if(event.target.name === "Sort") setSort(event.target.value);
        
    };

    return(
        <Fragment>
            <Nav />
            <div className="title-products">
                <h1>Produtos</h1>
            </div>
            <div className="filter">
                <div className="filter-products">
                    <p>Filter Products:</p>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Size</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={size}
                        label="Size"
                        name="Size"
                        onChange={handleChangeInput}
                        >
                            <MenuItem value="None">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="P">P</MenuItem>
                            <MenuItem value="M">M</MenuItem>
                            <MenuItem value="G">G</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Color</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={color}
                        label="Color"
                        name="Color"
                        onChange={handleChangeInput}
                        >
                            <MenuItem value="None">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='Yellow'>Yellow</MenuItem>
                            <MenuItem value='Red'>Red</MenuItem>
                            <MenuItem value='Blue'>Blue</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="sort-products">
                    <p>Sort:</p>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        name="Sort"
                        onChange={handleChangeInput}
                        >
                            <MenuItem value='Relevante'>Relevant</MenuItem>
                            <MenuItem value='Price'>Price</MenuItem>
                            <MenuItem value='New'>New</MenuItem>
                        </Select>
                    </FormControl>
                    
                </div>
            </div>
            <PopProducts />
            <Footer />
        </Fragment>
    )
}

export default ProductList