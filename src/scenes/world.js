import { colorizeBG } from "../utils/utils.js";
import { createHero, moveHero } from "../entities/hero.js";
import { gameState } from "../managers/managers.js";
import { globalInput } from "../utils/input.js";

export default function createWorld(k) {
    colorizeBG(k, 0, 0, 0);
    globalInput(k);

    const hero = k.add(createHero(k, k.vec2(8, 8)));
    moveHero(k, hero);
}
