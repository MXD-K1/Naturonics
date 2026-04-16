import { createEntity } from "./entity.js";

export function createEnemy(k, pos, opts) {
    let hp = 3;
    let damage = 1;
    let resistance = 0;
    let range = 100;

    if (opts.hp) hp = opts.hp;
    if (opts.damage) damage = opts.damage;
    if (opts.resistance) resistance = opts.resistance;
    if (opts.range) range = opts.range;

    return [
        ...createEntity(k, pos),
        k.health(hp),
        {
            damage: damage,
            resistance: resistance,
            range: range, // when will the enemy notice the player
            speed: 50,
            attacks: {},
        },
    ];
}

export function takeDamage(enemy, damage) {
    enemy.hurt(damage - enemy.resistance);
}

export function hasLos(enemy, player) {
    // Line of sight
    if (enemy.dist(player.pos) > enemy.range) return;
    return enemy.hasLineOfSight(player);
}

export function equipAttack(enemy, attack) {
    enemy.attacks[attack.name] = attack;
}

// TODO: implement state machine
