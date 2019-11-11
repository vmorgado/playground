import {SceneConfiguration} from '../model/scene.configuration';
import {ColorIdentifier} from '../entity/enums/color-identifier.enum';

export const duelSceneConfiguration: SceneConfiguration = {
    id: 1,
    metadata: { key: 'duel-scene'},
    key: 'duel-scene',
    containers: [{
        id: 1,
        key: 'container-left',
        title: 'left container',
        X_TILES: 3,
        Y_TILES: 9,
        START_X: 0,
        START_Y: 0,
        interactive: false,
        events: [],
        backgroundColor: 0x0000FF,
    }, {
        id: 2,
        key: 'container-main',
        title: 'main container',
        X_TILES: 10,
        Y_TILES: 9,
        START_X: 3,
        START_Y: 0,
        interactive: false,
        events: [],
        backgroundColor: 0xFF0000,
    }, {
        id: 3,
        key: 'container-right',
        title: 'left container',
        X_TILES: 3,
        Y_TILES: 9,
        START_X: 13,
        START_Y: 0,
        interactive: false,
        events: [],
        backgroundColor: 0x00FF00,
    }],
};
