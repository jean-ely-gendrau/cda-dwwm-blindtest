class GameDTO {

    constructor(
        private game_id: number,
        private createdAt: Date = new Date()
    ) {
    }
    
}

export default GameDTO;