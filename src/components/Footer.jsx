import React from "react";
import './Footer.css';


import { Link } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Footer = () => {

    return(
        <div className="footer-container">
            <div className="footer-info info-business">
                <h3>SomeThing.</h3>
                <p>
                    sdadasdads asdas dasd asdasdasdas wdfasd asdasdasd sadasdasdsa dsasdasdasd sadas dsad sad sad sadsae  adas dsddsads adsdasdas dsdasd 
                    sdadasdads asdas dasd asdasdasdas wdfasd asdasdasd sadasdasdsa dsasdasdasd sadas dsad sad sad sadsae  adas dsddsads adsdasdas dsdasd 
                </p>
                <div className="footer-icons">
                    <InstagramIcon />
                    <GitHubIcon />
                    <LinkedInIcon/>
                </div>
                
            </div>
            <div className="footer-info footer-links">
                <h3>Links</h3>
                <Link href="#"><p>Home</p></Link>
                <Link href="#"><p>Cart</p></Link>

            </div>
            <div className="footer-info footer-contact">
                <h3>Contatos</h3>
                <div>
                    <PhoneAndroidIcon />
                    <p>(xx) xxxxx-xxxx</p>
                </div>
                <div>
                    <LocationOnIcon />
                    <p>xxxxxxxxx, xxxxx</p>
                </div>
                <div>
                    <MailOutlineIcon />
                  <p>xxxxx@xxxx.xxx</p>
                </div>
            </div>
        </div>
    )
}

export default Footer