class PlayerDTO {

    /** 
     * Constructor to initialize the PlayerDTO object
     * @param player_id - Unique identifier for the player
     * @param points - Points scored by the player
     * @param username - Username of the player
    */
    constructor(
        private player_id: number, 
        private points: number, 
        private username: string
    ) {}
  
}

export default PlayerDTO;
