import { speedFactor } from "../utils/constants.js";

export function createEntity(k, name, pos, opts = {}) {
    return [
        k.pos(pos),
        k.area({ shape: opts.rect }),
        k.z(0), // to implement y-sorting
        k.body(),
        k.opacity(),
        {
            speed: (opts.speed || 10) * speedFactor,
            entityName: name,
        },
    ];
}
