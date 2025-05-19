
export interface CreatePlayer {
    username: string;
}

export interface UpdatePlayer {
    username: string;
}

export interface PlayerInterfaceDTO {
    player_id: number;
    points: number;
    username: string;
}