import React, { useState } from 'react';

import { sliderItems } from '../data';

import './Slider.css'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0)

    const handleClick = (direction) => {
        
        if(direction === 'left') {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2)
            
        } else {
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
        }
        translate(direction)
    }

    const translate = (direction) => {
        const wrapper = document.querySelector('.wrapper')
        direction === 'left' ? wrapper.style.transform = `translateX(${sliderIndex * 100}vw)` :
            wrapper.style.transform = `translateX(-${sliderIndex * 100}vw)`
    }

    return(
        <div className="slider">
            <div className="arrow arrow-left">
                <ArrowBackIosNewOutlinedIcon onClick={e => handleClick('right')}/>
            </div>
            <div className="wrapper">
                {sliderItems.map(item => {

                    return(
                        <div className="slide" key={item.id}>
                            <div className="img-container">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="info-container">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <button>Buy</button>
                                <div className="bg-blur"></div>

                            </div>
                        </div>
                    )
                })}
                
            </div>
            <div className="arrow arrow-right">
                <ArrowForwardIosOutlinedIcon onClick={e => handleClick('right')}/>
            </div>
        </div>
    )
}

export default Slider