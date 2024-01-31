import React, { Fragment } from "react";
import './Product.css'

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { pink, green, red, blue, yellow } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { InputLabel } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const Product = () => {

    const [size, setSize] = React.useState('P');
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChangeColor = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChangeColor,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return(
        <Fragment>
            <Nav />
            <div className="product-container">
                <div className="wrapper">
                    <div className="product-img">
                        <img src='https://i.ibb.co/S6qMxwr/jean.jpg' alt="" />
                    </div>
                    <div className="product-info">
                        <div className="product-text">
                            <h1>Calça</h1>
                            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <h3>R$20,00</h3>
                        </div>
                        
                        <form>
                            <div className="form-color">
                                <Radio {...controlProps('a')}
                                    sx={{
                                        color: green[800],
                                        '&.Mui-checked': {
                                            color: green[600],
                                        },
                                    }}
                                />
                                <Radio {...controlProps('b')} 
                                    sx={{
                                        color: red[800],
                                        '&.Mui-checked': {
                                            color: red[600],
                                        },
                                        }}
                                />
                                <Radio {...controlProps('c')}
                                    sx={{
                                        color: blue[800],
                                        '&.Mui-checked': {
                                            color: blue[600],
                                        },
                                        }}
                                />
                                <Radio {...controlProps('d')} 
                                    sx={{
                                        color: yellow[800],
                                        '&.Mui-checked': {
                                            color: yellow[600],
                                        },
                                        }}
                                />
                                <Radio
                                    {...controlProps('e')}
                                    sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                    }}
                                />
                            </div>
                            <div className="form-size">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={size}
                                label="Size"
                                onChange={handleChangeSize}
                                >
                                    <MenuItem value="P">P</MenuItem>
                                    <MenuItem value="M">M</MenuItem>
                                    <MenuItem value="G">G</MenuItem>
                                </Select>
                            </FormControl>
                            </div>
                            <div className="form-amount">
                                <TextField
                                id="outlined-number"
                                label="Quantity"
                                type="number"
                                InputProps={{ inputProps: { min: 1, max: 100 } }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                            </div>
                            <Button variant="outlined">
                                <AddShoppingCartIcon />
                                <span>Add To Cart</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Product