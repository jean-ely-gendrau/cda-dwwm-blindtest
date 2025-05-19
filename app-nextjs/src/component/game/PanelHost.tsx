'use client'

import "../../component/game/MainGrid.css"
import { UserList } from "./UserList";

export default function PanelHost(){

    return(

        <>
            <div>
                <div className="rules-text">
                    <p>Veuillez choisir entre ces 2 options :</p>
                    <p>Créer un salon ou Rejoindre un salon</p>
                </div>

                <div className="lobby-buttons-container">
                    <button>Créer un salon</button>
                    <button>Rejoindre un salon</button>
                </div>
            </div>

            <UserList />
        </>
        
    )
    
}