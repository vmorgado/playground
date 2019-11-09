import { PlayerInterface } from '../interfaces/PlayerInterface';
export class PlayerEntity implements PlayerInterface {
    private scene: Phaser.Scene;
    private sprite: Phaser.Physics.Arcade.Sprite;

    public onScene(scene: Phaser.Scene): PlayerEntity {
        this.scene = scene;
        return this;
    }
    public initializePhysics(): PlayerEntity {
        if (!this.sprite) {
            throw new Error('Sprite not found')
        }
        this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);
        return this;
    }
    public initializeSprite(spriteName: string): PlayerEntity {
        this.sprite = this.scene.physics.add.sprite(100, 450, 'dude');
        return this;
    }
}