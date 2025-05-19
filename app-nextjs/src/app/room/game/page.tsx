'use client'

import React from "react";
import InputTryLuck from "@/component/game/InputTryLuck";
import { UserList } from "@/component/game/UserList";
import "../../../component/game/MainGrid.css";


export default function Game(){

    return(

        <main className="grid-main-container">
            <div className="game-container">
            <div className="music-elements-container">
                <p>Test</p>
                {/* Mettre les éléments pour afficher musique etc */}
            </div>
            <InputTryLuck />
            </div>

            <UserList />
        </main>
    )
}