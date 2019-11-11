import { PlayerEntity } from '../player.entity';

export interface CharacterInterface {
    id: number;
    name: string;
    player: PlayerEntity;
}
