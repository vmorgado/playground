export class MainScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'main-scene',
    });
  }

  preload() {
    console.log('scene - preload');
  }

  create() {
    console.log('scene - create');
  }

  update(time: number, delta: number) {

    // console.log(`Scena - ${time} - ${delta}`);
  }
}
