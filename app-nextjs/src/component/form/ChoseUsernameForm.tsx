'use client'

import React from "react";

export default function ChoseUsername(){

    async function submitHandler(e: { preventDefault: () => void; }){

        e.preventDefault();
    }

    return(

        <>
            <form onSubmit={submitHandler} className="chose-username-form">

                <input type="text" placeholder="Choisissez un pseudo" className="chose-username-input"/>
            
            </form>
        </>
    )
}