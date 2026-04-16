import { createEntity } from "./entity.js";

export function createEnemy(k, pos, opts={}) {
    let hp = 3;
    let damage = 1;
    let resistance = 0;
    let range = 100;

    if (opts.hp) hp = opts.hp;
    if (opts.damage) damage = opts.damage;
    if (opts.resistance) resistance = opts.resistance;
    if (opts.range) range = opts.range;

    return [
        ...createEntity(k, pos, { speed: 50}),
        k.sprite("player", { anim: "player.down.idle" }),
        k.health(hp),
        k.sentry({}, { lineOfSight: true }),
        "enemy",
        {
            damage: damage,
            resistance: resistance,
            range: range, // when will the enemy notice the player
            attacks: {},
        },
    ];
}

export function takeDamage(enemy, damage) {
    if (damage - enemy.resistance <= 0) return;

    enemy.hurt(damage - enemy.resistance);
}

export function hasLos(enemy, player) {
    // Line of sight
    if (enemy.pos.dist(player.pos) > enemy.range) return false;
    return enemy.hasLineOfSight(player);
}

export function equipAttack(enemy, attack) {
    enemy.attacks[attack.name] = attack;
}


export function moveEnemy(k, enemy, hero) {
    const dir = hero.pos.sub(enemy.pos).unit();
    enemy.move(dir.x * enemy.speed, dir.y * enemy.speed);
}


// TODO: implement state machine
