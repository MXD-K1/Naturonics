import { createEntity } from "./entity.js";
import { gameState } from "../managers/managers.js";

export function createHero(k, pos) {
    return [
        ...createEntity(k, pos),
        k.rect(20, 20),
        k.color(255, 255, 255), // temp
        // k.health(),
        "player",
        {},
    ];
}

export function moveHero(k, hero) {
    hero.onKeyDown((key) => {
        if (gameState.getFreezePlayer()) return;

        const moveVec = k.vec2(0, 0);
        if (key === "left" || key === "a") moveVec.x = -hero.speed;
        if (key === "right" || key === "d") moveVec.x = hero.speed;
        if (key === "down" || key === "s") moveVec.y = hero.speed;
        if (key === "up" || key === "w") moveVec.y = -hero.speed;
        hero.move(moveVec.x * k.dt(), moveVec.y * k.dt());
    });
} // TODO: fix the doubled speed when using two keys at once
