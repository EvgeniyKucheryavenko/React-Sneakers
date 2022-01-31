import React from 'react';
import 'macro-css';
import sneakers1 from './assets/sneakers/1.jpg';
import sneakers2 from './assets/sneakers/2.jpg';
import sneakers3 from './assets/sneakers/3.jpg';
import sneakers4 from './assets/sneakers/4.jpg';
import search from './assets/sneakers/search.svg';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


const arr = [
    {
        id: 1,
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 12999,
        imgUrl: sneakers1,

    },
    {
        id: 2,
        name: "Мужские Кроссовки Nike Air Max 270",
        price: 12999,
        imgUrl: sneakers2,

    },
    {
        id: 3,
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 8499,
        imgUrl: sneakers3,

    },
    {
        id: 4,
        name: "Кроссовки Puma X Aka Boku Future Rider",
        price: 8999,
        imgUrl: sneakers4,

    },
]


const App = () => {


    return (
        <div className="wrapper clear">

            <Drawer/>
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
                    {arr.map(value => {
                        return (
                            <Card name={value.name} price={value.price} imgUrl={value.imgUrl}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;