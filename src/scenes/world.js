import { colorizeBG } from "../utils/utils.js";
import { createHero, moveHero } from "../entities/hero.js";
import { globalInput } from "../utils/input.js";
import { COLORS } from "../utils/constants.js";
import { screenWidth, screenHeight } from "../utils/constants.js";

export default function createWorld(k) {
    colorizeBG(k, ...COLORS.BLACK);
    globalInput(k);

    const hero = k.add(createHero(k, k.vec2(320, 170)));
    moveHero(k, hero);
    worldCamera(k, hero);

}

function worldCamera(k, person){
    const camScale = 1.5;
    k.setCamScale(camScale);

    const visibleWidth = k.width() / camScale;
    const visibleHeight = k.height() / camScale;

    k.onUpdate(() => {
        let camX = person.worldPos().x;
        let camY = person.worldPos().y;

        camX = Math.max(visibleWidth / 2, Math.min(camX, screenWidth - visibleWidth / 2));
        camY = Math.max(visibleHeight / 2, Math.min(camY, screenHeight - visibleHeight / 2));

        k.setCamPos(camX, camY);
    });
}

