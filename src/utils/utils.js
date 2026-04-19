import {
    screenWidth,
    screenHeight,
    tileWidth,
    tileHeight,
} from "./constants.js";

export function colorizeBG(k, r, g, b) {
    k.add([k.rect(screenWidth, screenHeight), k.color(r, g, b), k.fixed()]);
}

export function playAnimIfNotPlaying(gameObj, animName) {
    if (gameObj.curAnim() !== animName) gameObj.play(animName);
}

export async function fetchData(mapPath) {
    return await (await fetch(mapPath)).json();
} // also works for map data

export function drawTiles(k, map, layer, tileHeight, tileWidth) {
    for (let i = 0; i < layer.data.length; i++) {
        const tile = layer.data[i];
        if (tile === 0) continue;

        const x = (i % layer.width) * tileWidth;
        const y = Math.floor(i / layer.width) * tileHeight;

        map.add([
            k.sprite("assets", { frame: tile - 1 }),
            k.pos(x, y),
            k.offscreen(),
        ]);
    }
}
