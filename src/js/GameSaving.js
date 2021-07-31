export default class GameSaving {
  constructor(result) {
    this.id = result.id;
    this.created = result.created;
    this.userinfo = {
      id: result.id,
      name: result.name,
      level: result.level,
      points: result.points,
    };
  }
}
