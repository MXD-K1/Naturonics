import { createEntity } from "./entity.js";
import { gameState } from "../managers/managers.js";
import { playAnimIfNotPlaying } from "../utils/utils.js";

export function createHero(k, pos) {
    return [
        ...createEntity(k, pos),
        k.sprite("player", { anim: "player.down.move" }),
        k.area({ shape: new k.Rect(k.vec2(8, 40), 16, 16) }),
        // k.health(),
        "player",
        {
            direction: "down",
        },
    ];
}

export function moveHero(k, hero) {
    hero.onUpdate(() => {
    if (gameState.getFreezePlayer()) return;

    const moveVec = k.vec2(0, 0);

    if (k.isKeyDown("left") || k.isKeyDown("a")) {
      moveVec.x -= 1;
      hero.direction = "left";
    }
    if (k.isKeyDown("right") || k.isKeyDown("d")) {
      moveVec.x += 1;
      hero.direction = "right";
    }
    if (k.isKeyDown("down") || k.isKeyDown("s")) {
      moveVec.y += 1;
      hero.direction = "down";
    }
    if (k.isKeyDown("up") || k.isKeyDown("w")) {
      moveVec.y -= 1;
      hero.direction = "up";
    }

    const len = moveVec.len();
    if (len > 0) {
        console.log(`Moving`, moveVec);
        moveVec.x = (moveVec.x / len) * hero.speed;
        moveVec.y = (moveVec.y / len) * hero.speed;
        hero.move(moveVec.x * k.dt(), moveVec.y * k.dt());
        playAnimIfNotPlaying(hero, `player.${hero.direction}.move`);
    } else {
      playAnimIfNotPlaying(hero, `player.${hero.direction}.idle`);
    }
  });
} 


