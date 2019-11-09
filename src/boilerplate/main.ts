import 'phaser';
import { Game } from './game';
import {applicationContainer} from './application.container';
import {ColorIdentifier} from './entity/enums/color-identifier.enum';
import {DuelScene} from './scenes/duel.scene';
import {INJECTION_TYPES} from './injection-types';

// when the page is loaded, create our game instance
window.addEventListener('load', () => {

  // main game configuration
  const config: GameConfig = {
    width: 1366,
    height: 768,
    type: Phaser.AUTO,
    parent: 'game',
    scene: applicationContainer.get<DuelScene>(INJECTION_TYPES.DuelScene),
    backgroundColor: ColorIdentifier.BLACK,
    seed: ['a1h512l34ka634nck764vs23', '8765qkj88bilcouqobldknqd'],
  };

  const game = new Game(config , applicationContainer);
});
