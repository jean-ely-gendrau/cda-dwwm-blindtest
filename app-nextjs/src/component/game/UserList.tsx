'use client'

import React from "react";
import "../../component/game/MainGrid.css";


export function UserList(){

    return(

        <div className="player-list-container">
            <h1>Joueurs :</h1>
            <div className="player-grid">
                {/* Intégrer les joueurs ici après avoir récupérer
                    leurs pseudos
                */}
                <p className="player-name">TestTestTest</p>
            </div>
        </div>
    )
}