import { COLORS, screenHeight, screenWidth } from "../utils/constants.js";

let pauseMenu = null;

export function createPauseMenu(k) {
    pauseMenu = k.add([
        k.rect(screenWidth * 0.4, screenHeight * 0.8),
        k.color(COLORS.WHITE),
        k.anchor("center"),
        k.pos(k.center()),
        k.fixed(),
        "pauseMenu",
    ]);
}

export function destroyPauseMenu() {
    if (pauseMenu) pauseMenu.destroy();
}
