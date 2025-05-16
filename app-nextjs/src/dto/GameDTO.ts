import { UUID } from "crypto";

class GameDTO {
    game_id: UUID;

    constructor(game_id: number) {
        this.game_id = game_id;
    }
    
    getGameId(): number {
        return this.game_id;
    }

    setGameId(game_id: number): void {
        this.game_id = game_id;
    }

    toString(): string {
        return `Game ID: ${this.game_id}`;
    }

    toJSON(): string {
        return JSON.stringify({
            game_id: this.game_id,
        });
    }

    static fromJSON(json: string): GameDTO {
        const data = JSON.parse(json);
        return new GameDTO(data.game_id);
    }
}

export default GameDTO;