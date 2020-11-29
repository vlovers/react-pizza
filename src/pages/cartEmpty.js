import React from 'react'

import Header from '../components/header'
import emptyCartImg from '../img/empty-cart.png'


function CartEmpty() {
  return (
    <div className="wrapper">
        <Header/>

        <div class="content">
            <div class="container container--cart">
                <div class="cart cart--empty">
                    <h2>Корзина пустая <icon>😕</icon></h2>
                    <p>
                    Вероятней всего, вы не заказывали ещё пиццу.<br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <img src={emptyCartImg} alt="Empty cart" />
                    <a href="/" class="button button--black">
                    <span>Вернуться назад</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CartEmpty;
