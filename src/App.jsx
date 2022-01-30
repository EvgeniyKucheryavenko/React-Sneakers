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

            <header className="d-flex justify-between align-center p-40">
                <div className="headerLeft d-flex align-center">
                    <img src={Logo} alt="logo image" width={40} height={40}/>
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p>Магазин лучших кросовок</p>
                    </div>
                </div>
                <ul className="d-flex align-center">
                    <li className="mr-30">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                                stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                                stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                                stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="pl-15">1205 руб.</span>
                    </li>
                    <li>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
                                  fill="#9B9B9B"/>
                        </svg>
                    </li>
                </ul>
            </header>

            <div className="content p-40">

                <div className="d-flex justify-between mb-40 align-center">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src={search} alt="Search"/>
                        <input type="text" placeholder="Поиск"/>
                    </div>
                </div>

                <div className="sneakers d-flex">

                    <div className="card">
                        <div className="favorite">
                            <img src={heartUnliked} alt="heart"/>
                        </div>
                        <img
                            height={112}
                            width={133}
                            src={sneakers1} alt="sneakers image"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span className="mt-10">Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src={add} alt="addToCart" width={11} height={11}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            height={112}
                            width={133}
                            src={sneakers2} alt="sneakers image"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span className="mt-10">Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src={add} alt="addToCart" width={11} height={11}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            height={112}
                            width={133}
                            src={sneakers3} alt="sneakers image"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span className="mt-10">Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src={add} alt="addToCart" width={11} height={11}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            height={112}
                            width={133}
                            src={sneakers4} alt="sneakers image"/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span className="mt-10">Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src={add} alt="addToCart" width={11} height={11}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;