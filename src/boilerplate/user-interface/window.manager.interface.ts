export interface WindowManagerInterface {
  getWidth(): number;
  getHeight(): number;
  setScene(scene: Phaser.Scene): WindowManagerInterface;
}
