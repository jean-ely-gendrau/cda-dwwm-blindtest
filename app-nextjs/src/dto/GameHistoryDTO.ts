import PlayerDTO from "./PlayerDTO";

export class GameHistoryDTO {
    /**
     * Player list for the game.
     * @type {PlayerDTO[]}
     */
    private players: PlayerDTO[];

    /**
     * Constructor for GameHistoryDTO.
     * @param game_id - Unique identifier for the game.
     * @param createdAt - Date when the game was created.
     */
    constructor(private game_id: number, private createdAt: Date) {
        this.players = [];
    }

    /**
     * Adds a player to the game history.
     * @param player - Instance of PlayerDTO
     */
    public addPlayer(player: PlayerDTO): void {
        this.players.push(player);
    }
}