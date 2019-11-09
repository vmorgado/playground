export interface SceneInterface {
  preload();
  create();
  update(time: number, delta: number);
}
