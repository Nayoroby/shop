import React, { useEffect, useState } from 'react';
import "../reset.css"
import './App.scss';
import Cart from '../cart/cart';
import Header from "../header/header"
import Card from '../card/card';  

function App() {

  const [burgerOpen, setBurgerOpen] = useState('none')
  const [cartState, setCartState] = useState('none')

  const [cardItems, setCardItems] = useState([]);

  React.useEffect( () =>  {fetch('https://644e41b84e86e9a4d8f45732.mockapi.io/api/items/orange')
  .then((resp) => {
    return resp.json()
  }).then((json) => setCardItems(json))}, []) 

  const cardBody = document.querySelector('.cart__body')

  const addCartItem = (obj) => {
    const cartItemModel = `
    <div class="cart__item" id=${'cart' + obj.id}>
        <div class="cart__info">
            <img src=${obj.img} class="cart__img"/>
            <h4 class="cart__title">${obj.title}</h4>
            <div class="cart__text"><span class='cart__price'>${obj.price}  </span>/<span class='cart__weigth'>  500g</span></div>
        </div>
        <button class='cart__btn'>delete</button>
    </div>`
    
    if (document.querySelector(`#cart${obj.id}`)) {
      let currCart = document.querySelector(`#cart${obj.id}`)
      currCart.querySelector('.cart__price').innerText = parseInt(currCart.querySelector('.cart__price').innerText) + parseInt(obj.price) + '$'
      currCart.querySelector('.cart__weigth').innerText = parseInt(currCart.querySelector('.cart__weigth').innerText) + 500 + 'g'
    } else {
      cardBody.insertAdjacentHTML('beforeend', cartItemModel);
    }
  }


  return (
    <div className={burgerOpen === 'active' || cartState === 'active'? 'body active' : 'body'}>
      <Header burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} cartState={cartState} setCartState={setCartState}/>
      <div className='home'>
        <div className="home__container">
          <div className="cards__body">
            <div className={!cardItems.length? 'loader' : 'none'}></div>
            {cardItems.map(cardItems => {
              return <Card addCartItem={addCartItem} key={cardItems.id} title={cardItems.title} img={cardItems.img} price={cardItems.price} id={cardItems.id}/>
            })}
          </div>
        </div>
        <Cart className='cart' cartState={cartState} setCartState={setCartState}/>
      </div>
    </div>
  ) 
}

export default App