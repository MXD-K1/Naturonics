import { speedFactor } from "../utils/utils.js";
import { createPlayer } from "./player.js";

export function createEntity(k, pos) {
    return [
        k.pos(pos),
        k.area(),
        k.body(),
        k.opacity(),
        {
            speed: 100 * speedFactor,
            damage: 1,
        },
    ];
}
