import { isObject } from "../utils/utils.js";

const STORAGE_KEY = "old_game";

export function createNewPlayer(nickname) {
    // only for now all players will be named player
    return {
        id: crypto.randomUUID(),
        nickname: nickname,
        joinDateString: new Date(),
        joinDateNumber: Date.now(), // easier for calculation
        version: "0.1.0",

        playTime: 0, // ignore that for now

        settings: {
            language: "EN",
        },

        badges: ["Early Supporter"],

        saveSlot: {}, // "save_1"
    };
}

export function getPlayer() {
    let player = localStorage.getItem(STORAGE_KEY);
    if (!player) {
        player = createNewPlayer("player");
        savePlayer(player);
        return player;
    }
    return parseObject(player);
}

export function savePlayer(player) {
    console.log(stringifyObject(player));
    localStorage.setItem(STORAGE_KEY, stringifyObject(player));
}

function stringifyObject(object) {
    const newObject = {};
    for (let [key, value] of Object.entries(object)) {
        if (isObject(value)) {
            stringifyObject(value);
        }
        newObject[JSON.stringify(key)] = JSON.stringify(value);
    }
    return newObject;
}

function parseObject(object) {
    return JSON.parse(object);
}
