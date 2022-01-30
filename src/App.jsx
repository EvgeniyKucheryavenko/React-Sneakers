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
import Drawer from "./components/Drawer";
const App = () => {
    return (
        <div className="wrapper clear">
            <div className="overlay" style={{display: 'none'}}>
                <Drawer/>
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