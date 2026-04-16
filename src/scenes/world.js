import { colorizeBG } from "../utils/utils.js";
import { createHero, moveHero } from "../entities/hero.js";
import { globalInput } from "../utils/input.js";
import { COLORS } from "../utils/constants.js";
import { createEnemy, moveEnemy, hasLos } from "../entities/enemy.js";

export default function createWorld(k) {
    colorizeBG(k, ...COLORS.BLACK);
    globalInput(k);

    const hero = k.add(createHero(k, k.vec2(320, 170)));
    k.add(createEnemy(k, k.vec2(400, 170), {}));
    moveHero(k, hero);
    
    k.onUpdate("enemy", (enemy) => {
        const seesPlayer = hasLos(enemy, hero);
        if (seesPlayer) {
            moveEnemy(k, enemy, hero);
        }
    });


    k.setCamPos(hero.worldPos());
    k.setCamScale(1.5);
}
