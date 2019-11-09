import { Container } from 'inversify';
import { INJECTION_TYPES } from './injection-types';
import {DuelScene} from './scenes/duel.scene';
import {Game} from './game';
import {MainScene} from './scenes/main.scene';
import {WindowManagerInterface} from './user-interface/window.manager.interface';
import {WindowManager} from './user-interface/window.manager';

const applicationContainer = new Container();

// Object Game
applicationContainer.bind<Game>(INJECTION_TYPES.Game).to(Game);

// Scenesx
applicationContainer.bind<DuelScene>(INJECTION_TYPES.DuelScene).to(DuelScene);
applicationContainer.bind<MainScene>(INJECTION_TYPES.MainScene).to(MainScene);

// Window Manager
applicationContainer.bind<WindowManagerInterface>(INJECTION_TYPES.WindowManagerInterface).to(WindowManager);

export { applicationContainer };
