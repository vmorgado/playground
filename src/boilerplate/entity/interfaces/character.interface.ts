import { Player } from 'dist/entities/player.entity';

export interface CharacterInterface {
    id: number;
    name: string;
    player: Player;
}
