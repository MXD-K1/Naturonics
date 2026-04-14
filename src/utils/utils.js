import { screenWidth, screenHeight } from "./constants.js";

export function colorizeBG(k, r, g, b) {
    k.add([k.rect(screenWidth, screenHeight), k.color(r, g, b), k.fixed()]);
}

export async function fetchMapData(mapPath) {
    return await (await fetch(mapPath)).json();
}

export function drawTiles(k, map, layer, tileHeight, tileWidth) {
    let nbOfDrawnTiles = 0;
    const tilePos = k.vec2();
    for (const tile of layer.data) {
        if (nbOfDrawnTiles % layer.width === 0) {
            tilePos.x = 0;
            tilePos.y += tileHeight;
        } else {
            tilePos.x += tileWidth;
        }

        nbOfDrawnTiles++;
        if (tile === 0) continue;

        // TODO: Add draw logic here
    }
}
