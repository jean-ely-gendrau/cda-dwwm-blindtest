//import Game from "@/model/Game";
import mysql from "mysql2/promise";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  // create the connection
  const connection = await mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "blind-test",
  });

 
  try {
     // create query
    const [results, fields] = await connection.query(
      'SELECT * FROM `game`'
    );

     // const player = new Game();
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available

    return Response.json({ results });
  } catch (err) {
     // const player = new Game();

  return Response.json({ err });
    console.log(err);
  }
  finally {
    console.log("finally");
    // Close the connection
    await connection.end();
  }
}

export async function POST(req: NextRequest, res:NextResponse) {
    console.log(req,res);
    Response.redirect("/history");

}

export async function PUT() {}

export async function DELETE() {}
