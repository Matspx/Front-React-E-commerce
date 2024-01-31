import React, { Fragment } from "react";
import './ProductList.css'

import PopProducts from "../components/PopProducts";
import NewsLetter from "../components/Newsletter";


import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


const ProductList = () => {

    return(
        <Fragment>
            <div className="title-products">
                <h1>Produtos</h1>
            </div>
            <div className="filter">
                <div className="filter-products">
                    <p>Filter Products:</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Color</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value=""
                        label="Color"
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value='Yellow'>Yellow</MenuItem>
                            <MenuItem value='Red'>Red</MenuItem>
                            <MenuItem value='Blue'>Blue</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value=""
                        label="Size"
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value='P'>P</MenuItem>
                            <MenuItem value='M'>M</MenuItem>
                            <MenuItem value='G'>G</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="sort-products">
                    <p>Sort:</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Relevant</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value=""
                        label="Age"
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value='Relevante'>Relevante</MenuItem>
                            <MenuItem value='Price'>Price</MenuItem>
                            <MenuItem value='New'>New</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <PopProducts />
            <NewsLetter />
        </Fragment>
    )
}

export default ProductList