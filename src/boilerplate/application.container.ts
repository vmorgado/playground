import {Container, decorate, injectable} from 'inversify';
import { INJECTION_TYPES } from './injection-types';
import {DuelScene} from './scenes/duel.scene';
import {Game} from './game';
import {MainScene} from './scenes/main.scene';
import {WindowManagerInterface} from './user-interface/window.manager.interface';
import {WindowManager} from './user-interface/window.manager';
import {SceneInterface} from './scenes/scene.interface';
import {ColorIdentifier} from './entity/enums/color-identifier.enum';

decorate(injectable(), Phaser.Scene);

const applicationContainer = new Container();

// Object Game
applicationContainer.bind<Game>(INJECTION_TYPES.Game).to(Game);

// Scenes
applicationContainer.bind<SceneInterface>(INJECTION_TYPES.DuelScene).to(DuelScene);
applicationContainer.bind<SceneInterface>(INJECTION_TYPES.MainScene).to(MainScene);

// Window Manager
applicationContainer.bind<WindowManagerInterface>(INJECTION_TYPES.WindowManagerInterface).to(WindowManager);

// main game configuration
const gameConfig: GameConfig = {
  width: 1366,
  height: 768,
  type: Phaser.AUTO,
  parent: 'game',
  scene: applicationContainer.get<DuelScene>(INJECTION_TYPES.DuelScene),
  backgroundColor: ColorIdentifier.BLACK,
  seed: ['a1h512l34ka634nck764vs23', '8765qkj88bilcouqobldknqd'],
};

export { applicationContainer, gameConfig };
