'use client'

import React from "react";
import "../../../component/game/MainGrid.css";
import PanelHost from "@/component/game/PanelHost";

export default function lobbyPage(){

    return(

        <main className="grid-main-container">
            <PanelHost />
        </main>
    )
}







/**
 * Cette page contient 2 composants : contenus dans un main avec grid template columns 3fr 1fr, qui sera réutilisé dans game/page.tsx
 * Premier composant contient deux boutons : créer un salon et rejoindre un salon
 * l'autre composant c'est UserList, colonne qui contiendra les pseudos des joueurs
 * 
 *  
 * */ 
