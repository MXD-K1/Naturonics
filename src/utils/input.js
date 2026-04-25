import { gameState } from "../managers/stateManagers.js";
import { togglePauseMenuState } from "../ui/pauseMenu.js";

export function globalInput(k) {
    // TODO: Bind fullscreen key.
    // TODO: Add gamepad mappings.
    let current = false;
    k.onKeyPress("p", () => {
        current = !current;
        gameState.setFreezePlayer(current);
        togglePauseMenuState(k);
    });
}
