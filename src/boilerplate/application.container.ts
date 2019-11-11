import {Container, decorate, injectable, interfaces} from 'inversify';
import { INJECTION_TYPES } from './injection-types';
import {DuelScene} from './scenes/duel.scene';
import {Game} from './game';
import {MainScene} from './scenes/main.scene';
import {WindowManagerInterface} from './user-interface/window.manager.interface';
import {WindowManager} from './user-interface/window.manager';
import {SceneInterface} from './scenes/scene.interface';
import {ColorIdentifier} from './entity/enums/color-identifier.enum';
import {GeneratorInterface} from './duel/generator.interface';
import {MarbleGenerator} from './duel/marble.generator';
import {MarbleBoard} from './duel/marble.board';

decorate(injectable(), Phaser.Game);
decorate(injectable(), Phaser.Scene);

const applicationContainer = new Container({
  // skipBaseClassChecks: true,
  // autoBindInjectable: true,
});

// Random Generator
const randomDataGeneratorService = new Phaser.Math.RandomDataGenerator(['a1h512l34ka634nck764vs23', '8765qkj88bilcouqobldknqd']);
applicationContainer.bind('RANDOM_GENERATOR')
  .toConstantValue(randomDataGeneratorService);

// Marble Game
applicationContainer.bind<MarbleBoard>(INJECTION_TYPES.MarbleBoard).to(MarbleBoard);
applicationContainer.bind<GeneratorInterface>(INJECTION_TYPES.MarbleGenerator).to(MarbleGenerator);

// Window Manager
applicationContainer.bind<WindowManagerInterface>(INJECTION_TYPES.WindowManagerInterface).to(WindowManager);

// Scenes
applicationContainer.bind<SceneInterface>(INJECTION_TYPES.DuelScene).to(DuelScene);
applicationContainer.bind<SceneInterface>(INJECTION_TYPES.MainScene).to(MainScene);

// main game configuration
const gameConfig: GameConfig = {
  width: 1366,
  height: 768,
  type: Phaser.AUTO,
  parent: 'game',
  scene: applicationContainer.resolve<SceneInterface>(DuelScene),
  backgroundColor: ColorIdentifier.BLACK,
};

applicationContainer.bind(INJECTION_TYPES.GameConfig).toConstantValue(gameConfig);

// Object Game
applicationContainer.bind<Game>(INJECTION_TYPES.Game).to(Game);

console.log(applicationContainer);

export { applicationContainer, gameConfig };
