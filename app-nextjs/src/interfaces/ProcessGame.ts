import { UUID } from "crypto";
import { PlayerInterfaceDTO } from "./ProcessPlayer";

export interface JoigneGame {
    id_game: UUID;
}

export interface HistoryGame {
    id_game: UUID;
    playerList: PlayerInterfaceDTO[];
    createdAt: Date;
}

export interface TryYourLuck {
    response: string;
}