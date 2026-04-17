import { gameState } from "../managers/stateManagers.js";

export function globalInput(k) {
    // TODO: Bind pause, and fullscreen keys.
    // TODO: Add gamepad mappings.
    let current = false;
    k.onKeyPress("p", () => {
        current = !current;
        gameState.setFreezePlayer(current);
    });
}
