import { GameHistoryDTO } from "@/dto/GameHistoryDTO";
import PlayerDTO from "@/dto/PlayerDTO";
import { QueryGamePlayer } from "@/type/queryHistory";
import mysql from "mysql2/promise";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {

  const stringConnection = `db://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@localhost:3325/blind_test`
  // create the connection
  const connection = await mysql.createConnection(stringConnection);

  try {

    // create query
    //{"results":[{"game_game_id":1,"player_player_id":2,"player_id":2,"username":"Player2","points":200,"game_id":1,"created_at":"2025-05-15T08:56:12.000Z"},
    const [results, fields] = await connection.query(
      'SELECT * FROM `game_history` AS g_history ' +
      'JOIN `player` ON g_history.player_player_id = player.player_id ' +
      'JOIN `game` ON g_history.game_game_id = game.game_id'
    );

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    if (results) {
 
      // Convert the results to the desired format
      const mappedResultQuery = (results as QueryGamePlayer[]).map(r => ({
      player_id: r.player_id,
      username: r.username,
      points: r.points,
      game_id: r.game_id,
      created_at: r.created_at,
    }))
    
    // Reduce the mapped results to group by game_id
    const histotyGame = mappedResultQuery.reduce(
            (acc: {[game_id:number]:GameHistoryDTO}, row: QueryGamePlayer) => {
            
            const { player_id, username, game_id, points, created_at } = row;
            
            // console.log("acc: " + acc, "row:" + row,);
            // console.log("acc.hasOwnProperty",acc.hasOwnProperty(game_id));
            
            // Check if the game_id already exists in the accumulato
            if (!acc.hasOwnProperty(game_id)) { 

              // If the game_id does not exist in the accumulator, create a new entry
              acc[game_id] = new GameHistoryDTO(game_id, created_at);
            }
            // Add the player to the players array for the corresponding game_id
            acc[game_id].addPlayer(new PlayerDTO(player_id, points, username));
            
            return acc;
          }, {});

      //console.log("histotyGame:",histotyGame);
      return Response.json({ histotyGame });
    }

    // If no results, return an empty array
    return Response.json({ histotyGame: [] });

  } catch (err) {
    // Handle any errors that occurred during the query
    console.error("Error executing query:", err);
    return Response.json({ err });
  }
  finally {
    console.log("finally");
    // Close the connection
    await connection.end();
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  console.log(req, res);
  Response.redirect("/history");

}

export async function PUT() { }

export async function DELETE() { }
