import { PlayerEntity } from "../entities/PlayerEntity";

export interface PlayerInterface {
    onScene(scene: Phaser.Scene): PlayerInterface;
    initializePhysics(): PlayerInterface;
    initializeSprite(spriteName: string): PlayerEntity;
}
