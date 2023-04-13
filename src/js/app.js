import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js'

console.log('import from game', Game)
console.log('import from game', GameSavingData)
console.log('import from game', loadGame)
console.log('import from game', saveGame)

const game = new Game();
game.start();