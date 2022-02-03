import React from 'react';
import heartUnliked from "../../assets/heartunliked.svg";
import add from "../../assets/add.svg";


const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="favorite">
                    <img src={heartUnliked} alt="heart"/>
                </div>
                <img
                    height={112}
                    width={133}
                    src={props.imgUrl} alt="sneakers image"/>
                <h5>{props.name}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span className="mt-10">Цена: </span>
                        <b>{props.price}руб.</b>
                    </div>
                    <button className="button" onClick={props.onClick}>
                        <img src={add} alt="addToCart" width={11} height={11}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;