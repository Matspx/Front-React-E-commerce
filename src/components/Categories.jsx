import React from "react";
import './Categories.css';
import { CategoriesList } from "../data";

const Categories = () => {

    return(
        <div className="categories">
            {CategoriesList.map(item => {
              
              return(
                <div className="categorie" key={item.id}>
                    <div className="info-categories-container">
                        <h1>{item.title}</h1>
                        <button>Buy</button>
                    </div>
                    <img src={item.img} />

                </div>
              )
            })}
        </div>
    )
}

export default Categories