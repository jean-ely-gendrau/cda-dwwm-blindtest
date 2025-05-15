class Player {
  playerId: number;
  points: number;
  username: string;

  constructor(playerId: number, points: number, username: string) {
    this.playerId = playerId;
    this.points = points;
    this.username = username;
  }

  updatePoints(points: number) {
    this.points = points;
  }

  updateUsername(username: string) {
    this.username = username;
  }

  getPlayerId(): number {
    return this.playerId;
  }

  getPoints(): number {
    return this.points;
  }

  getUsername(): string {
    return this.username;
  }

  setPlayerId(playerId: number): void {
    this.playerId = playerId;
  }

  setPoints(points: number): void {
    this.points = points;
  }

  setUsername(username: string): void {
    this.username = username;
  }

  toString(): string {
    return `Player ID: ${this.playerId}, Points: ${this.points}, Username: ${this.username}`;
  }

  toJSON(): string {
    return JSON.stringify({
      playerId: this.playerId,
      points: this.points,
      username: this.username,
    });
  }

  static fromJSON(json: string): Player {
    const data = JSON.parse(json);
    return new Player(data.playerId, data.points, data.username);
  }
}

export default Player;