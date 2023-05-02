import React, { useState } from 'react';
import "./card.scss";


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