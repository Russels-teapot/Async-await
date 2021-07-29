import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    (async () => {
      try {
        const result = await read();
        const parsedResult = await json(result);
        console.log(parsedResult);
      } catch (error) {
        console.log(error);
      }
    })();
  }
}
