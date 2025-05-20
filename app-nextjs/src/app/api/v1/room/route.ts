// Route qui servira à récupérer les pseudos des joueurs présents dans 
// le lobby pour créer des balises p à ajouter dans le container prévu à cet effet

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){

    const [players] = await db.query("SELECT * FROM Player");

    return NextResponse.json({players})
}

GET();