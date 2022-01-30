import React from 'react';
import Logo from './assets/logo.png';
import 'macro-css';
import sneakers1 from './assets/sneakers/1.jpg';
import sneakers2 from './assets/sneakers/2.jpg';
import sneakers3 from './assets/sneakers/3.jpg';
import sneakers4 from './assets/sneakers/4.jpg';
import add from './assets/add.svg';
import search from './assets/sneakers/search.svg';
import heartUnliked from './assets/heartunliked.svg'
import btnRemove from './assets/btnremove.svg';
import arrow from './assets/arrow.svg';
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
    return (
        <div className="wrapper clear">
            <div className="overlay" style={{display: 'none'}}>
                <div className="drawer">
                    <h2 className="mb-30 d-flex justify-between">
                        Корзина
                        <img src={btnRemove} alt="remove" className="cu-p removeBtn"/>
                    </h2>
                    <div className="items mb-50">
                        <div className="cartItem d-flex align-center mb-20 ">
                            <div className="cartItemImg">
                                <img src={sneakers1} alt="image" width={70} height={70} className="mr-20"/>
                            </div>
                            <div className="mr-20">
                                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <button><img src={btnRemove} alt="remove" className="removeBtn"/></button>
                        </div>
                        <div className="cartItem d-flex align-center mb-20 ">
                            <div className="cartItemImg">
                                <img src={sneakers1} alt="image" width={70} height={70} className="mr-20"/>
                            </div>
                            <div className="mr-20">
                                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <button><img src={btnRemove} alt="remove" className="removeBtn"/></button>
                        </div>
                        <div className="cartItem d-flex align-center mb-20 ">
                            <div className="cartItemImg">
                                <img src={sneakers1} alt="image" width={70} height={70} className="mr-20"/>
                            </div>
                            <div className="mr-20">
                                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <button><img src={btnRemove} alt="remove" className="removeBtn"/></button>
                        </div>
                    </div>

                    <div className="cartTotalBlock ">
                        <ul>
                            <li className="d-flex">
                                <span>Итого:</span>
                                <div></div>
                                <b>21 498 руб.</b>
                            </li>
                            <li className="d-flex">
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>1074 руб. </b>
                            </li>
                        </ul>
                        <button className="greenButton">
                            Оформить заказ
                            <img src={arrow} alt="arrow"/>
                        </button>
                    </div>

                </div>
            </div>
            <Header/>
            <div className="content p-40">
                <div className="d-flex justify-between mb-40 align-center">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src={search} alt="Search"/>
                        <input type="text" placeholder="Поиск"/>
                    </div>
                </div>
                <div className="sneakers d-flex">
                    <Card/>
                </div>
            </div>
        </div>
    );
};

export default App;