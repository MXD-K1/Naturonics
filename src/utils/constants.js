import createWorld from "../scenes/world.js";
import loadScene from "../scenes/load.js";

export const SCENES = {
    load: loadScene,
    world: createWorld,
};

export const screenWidth = 1280;
export const screenHeight = 720;
export const tileHeight = 32;
export const tileWidth = 32;

export const speedFactor = 1000;

export const LOCALES = Object.freeze({
    AR: "AR",
    EN: "EN",
    ES: "ES",
});

export const COLORS = Object.freeze({
    WHITE: [255, 255, 255],
    BLACK: [0, 0, 0],
    BLUE: [41, 41, 255],
    BROWN: [165, 42, 42],
});

export const dialogData = {
    AR: null,
    EN: null,
    ES: null,
};

export const ATTACK_STATES = Object.freeze({
    READY: 0,
    COOLDOWN: 1,
    SEALED: 2,
    LOCKED: 3,

    // difference: locked when an attack is restricted by programmer/
    // or attack should not be used in this level (player is too weak,
    // secret attack, etc...) while sealed is used when a condition of
    // an attack is not met, e.g. if player is invisible,
    // environment is not suitable, etc...
});

export const ATTACK_TYPES = Object.freeze({
    MELEE: 0, // near-range (hands, body, swords, etc..)
    RANGED: 1, // bows, guns, ...
    AREA_EFFECT: 2,
    TARGET_EFFECT: 3, // unavoidable
    PROJECTILE: 4, // not sure about the difference between this and ranged.
    SPECIAL: 5,
});

export const ATTACK_TARGETS = Object.freeze({
    SINGLE: 0,
    MULTIPLE: 1,
    AREA: 2,
    AUTO_TARGET: 3,
    NULL: 4,
});
