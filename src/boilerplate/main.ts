import 'phaser';
import { Game } from './game';
import { applicationContainer, gameConfig} from './application.container';

// when the page is loaded, create our game instance
window.addEventListener('load', () => {

  const game = new Game(gameConfig , applicationContainer);
});
