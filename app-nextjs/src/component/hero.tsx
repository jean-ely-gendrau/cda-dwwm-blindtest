import React from "react";
import './hero.css';

export default function Hero(){

    return (

        <div className="hero-container">
            <h1 className="game-title">Blind Test Musical</h1>
            <p className="game-description">
            Cette application est un « blind-test ». Défiez-vous et vos amis avec ce quiz musical ! Choisissez un thème et vous aurez 10 secondes pour deviner chaque titre !
            </p>
        </div>

    );
}