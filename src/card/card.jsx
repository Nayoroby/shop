import React, { useState } from 'react';
import "./card.scss";
import apple from "../../public/apple.jpg";
import orange from "../../public/orange.jpg";
import banana from "../../public/banana.jpg";
import raspberries from "../../public/raspberries.jpg";
import cherry from "../../public/cherry.jpg";
import melon from "../../public/melon.jpg";
import pear from "../../public/pear.jpg";
import strawberry from "../../public/strawberry.jpg";
import watermelon from "../../public/watermelon.jpg";
import kiwi from "../../public/kiwi.jpg";


const Card = ({addCartItem, title, img, price, id}) => {

    return (
        <div className="card" id={`card${id}`}>
            <div className="card__body">
                <div className="card__info">
                    <img src={img} className="card__img"/>
                    <h4 className="card__title">{title}</h4>
                    <div className="card__text"><span className='card__price'>{price}  </span>/<span className='card__weigth'>  500g</span></div>
                </div>
                <button className='card__btn' onClick={() =>{addCartItem({title, img, price, id})}}>buy</button>
            </div>
      </div>
    );
};

export default Card;