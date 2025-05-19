import "./Header.css";
import React from 'react';

export default function Header(){

    return(

        <header>
            <nav className="menu-navigation">
                <ul className="nav-container">
                    <li>ACCUEIL</li>
                    <li>JOUER</li>
                    <li>CLASSEMENT / HISTORIQUE</li>
                </ul>
            </nav>
        </header>
    )
}

/* A importer dans le fichier correspondant */