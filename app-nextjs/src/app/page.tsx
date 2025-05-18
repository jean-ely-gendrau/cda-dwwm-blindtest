'use client'
import Hero from "@/component/hero";
import React, {useEffect, useState} from 'react';
import { PlayerInterfaceDTO } from "@/interfaces/ProcessPlayer";

/* Les import en dessous sont pour voir le rendu, à supprimer */
//import Footer from "@/component/layout/Footer";
//import NavBar from "@/component/layout/Header";



export default function Home(){

  const [player, setPlayer] = useState<PlayerInterfaceDTO>({playerId:0, username: "user", points:0});

  useEffect(() => {
    const fetchPlayer = async () => {
      const response = await fetch("http://localhost:3000/api/v1/game/history");
      const res = await response.json();
      setPlayer(JSON.parse(res.player));
      console.log(player);
      console.log(res);
    };

    fetchPlayer();
  }, []);

  return(

 
    <main>
      <p>salut {player?.username}</p>
      
      <Hero />

      
    </main>
  )
}