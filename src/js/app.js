import GameSavingLoader from './GameSavingLoader';

const gameSavingLoader = new GameSavingLoader();

(async () => {
  try {
    await gameSavingLoader.load();
  } catch (error) {
    console.log(error);
  }
})();
