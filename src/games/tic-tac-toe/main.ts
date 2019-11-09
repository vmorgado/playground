import 'phaser';
import { MainScene } from './scenes/main.scene';
import { Game } from './game';
import { Player } from './entities/player.entity';

// main game configuration
const config: GameConfig = {
  width: 500,
  height: 500,
  type: Phaser.AUTO,
  parent: 'game',
  scene: MainScene,
  backgroundColor: '#FFF',
};

// when the page is loaded, create our game instance
window.addEventListener('load', () => {
  const game = new Game(config);
});
