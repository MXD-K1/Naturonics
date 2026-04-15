import createWorld from "../scenes/world.js";

export const SCENES = {
    world: createWorld,
};

export const screenWidth = 1280;
export const screenHeight = 720;
export const tileHeight = 32;
export const tileWidth = 32;

export const speedFactor = 1000;

export const LOCALES = Object.freeze({
    AR: "ar",
    EN: "en",
    ES: "es",
});

// TODO: Add other shared constants (colors, layers, z-index, speeds).
