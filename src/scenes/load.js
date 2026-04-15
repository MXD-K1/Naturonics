import { colorizeBG } from "../utils/utils.js";
import { COLORS, screenHeight, screenWidth } from "../utils/constants.js";

export default function loadScene(k) {
    colorizeBG(k, ...COLORS.BLUE);

    const pos = k.vec2(screenWidth / 2 - 100, screenHeight / 2 - 10);
    const loadBar = k.add([
        k.rect(200, 20),
        k.color(COLORS.WHITE),
        k.outline(3, { color: COLORS.BLACK }),
        k.pos(pos),
        k.fixed(),
    ]);

    let progress = 0;
    const bar = loadBar.add([
        k.rect(0, 12),
        k.color(COLORS.BLACK),
        k.pos(3, 4),
        k.fixed(),
    ]);

    k.onUpdate(() => {
        if (progress >= 192) return;
        progress += 0.3;
        bar.width = progress;
    });
}
