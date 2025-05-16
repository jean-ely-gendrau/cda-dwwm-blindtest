
export interface CreatePlayer {
    username: string;
}

export interface UpdatePlayer {
    username: string;
}

export interface PlayerInterfaceDTO {
    playerId: number;
    points: number;
    username: string;
}