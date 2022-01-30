import React from 'react';
import heartUnliked from "../assets/heartunliked.svg";
import sneakers1 from "../assets/sneakers/1.jpg";
import add from "../assets/add.svg";

const Card = () => {
    return (
        <div>
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
        </div>
    );
};

export default Card;