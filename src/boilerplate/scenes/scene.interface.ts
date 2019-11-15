export interface SceneInterface {
  add: Phaser.GameObjects.GameObjectFactory;
  preload();
  create();
  update(time: number, delta: number);
}
