import React from "react";
import './Nav.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Badge } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Nav = () => {
    
    return(
        <div className="nav-bar">
            <div className="search">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField label="" variant="outlined" />
                    <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                </Box>
            </div>
            <div className="logo">SomeThing.</div>
            <div className="user">
                <a href="/" className="register">Register</a>
                <a href="/" className="signin">Sign In</a>
                <a href="/" className="signin">
                    <Badge badgeContent={4}>
                        <ShoppingCartOutlinedIcon/>  
                    </Badge>
                </a>
            </div>
        </div>
    )
}

export default Nav