'use client'

import React, { useEffect, useState } from "react";
import "../../component/game/MainGrid.css";


export function UserList(){

    // username devient un tableau avec l'argument []
    const [username, setUsername] = useState("[]");

    useEffect(()=>{

        async function fetchUsername(){

            const response = await fetch("/api/v1/room");
            // Récupération de l'objet contenant tous les pseudos stockés en BDD dans la table Player
            const players = await response.json();
        }

        fetchUsername();

    }, []); // Possibilité de mettre une variable entre les crochets,
            // pour que lorsque celle-ci est modifiée, la fonction soit réexécutée



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