'use client'
import Hero from "@/component/hero";
import React, {useEffect, useState} from 'react';
// (Line removed)

/* Les import en dessous sont pour voir le rendu, à supprimer */
import PlayerDTO from "@/dto/PlayerDTO";


export default function Home(){

  const [player, setPlayer] = useState<PlayerDTO>();

  useEffect(() => {

  
  
        const response = await fetch("http://localhost:3000/api/v1/game/history");
        setPlayer(await response.json());
        console.log(player);
        console.log(response);
      
      
    
    
  }, []);

  return(

 
    <main>
      <p>salut {player?.username}</p>
      
      <Hero />

      
    </main>
  )
}