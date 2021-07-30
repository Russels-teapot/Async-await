import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

const gameSaving = new GameSaving();
export default class GameSavingLoader {
  static async load() {
    try {
      const result = await read();
      const parsedResult = await json(result);
      console.log(parsedResult);
    } catch (error) {
      console.log(error);
    }
    return gameSaving;
  }
}
