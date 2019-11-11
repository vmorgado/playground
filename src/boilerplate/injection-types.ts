const INJECTION_TYPES = {
    Game: Symbol.for('Game'),
    GameConfig: Symbol.for('GameConfig'),
    SceneInterface: Symbol.for('SceneInterface'),
    MainScene: Symbol.for('MainScene'),
    DuelScene: Symbol.for('DuelScene'),
    WindowManagerInterface: Symbol.for('WindowManagerInterface'),
    MarbleGenerator: Symbol.for('MarbleGenerator'),
    MarbleBoard: Symbol.for('MarbleBoard'),
    RandomDataGenerator: Symbol.for('RandomDataGenerator'),
};

export {INJECTION_TYPES};
