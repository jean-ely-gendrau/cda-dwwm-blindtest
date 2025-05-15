import { UUID } from "crypto";

class Game {
    game_id: UUID;
    createdAt: Date;

    constructor(game_id: UUID) {
        this.game_id = game_id;
        this.createdAt = new Date();
    }

    getGameId(): UUID {
        return this.game_id;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }

    setGameId(game_id: UUID): void {
        this.game_id = game_id;
    }
    setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }

    toString(): string {
        return `Game ID: ${this.game_id}, Created At: ${this.createdAt}`;
    }

    toJSON(): string {
        return JSON.stringify({
            game_id: this.game_id,
            createdAt: this.createdAt,
        });
    }

    static fromJSON(json: string): Game {
        const data = JSON.parse(json);
        return new Game(data.game_id);
    }
}

export default Game;
