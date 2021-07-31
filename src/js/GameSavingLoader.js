import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  async load() {
    const result = await read();
    const parsedResult = await json(result);
    const gameSaving = await new GameSaving(parsedResult);
    console.log(gameSaving);
    return gameSaving;
  }
}
