// health or hp for short
import { COLORS } from "../utils/constants.js";

export function createHPBar(k, hero) {
    let hp = hero.hp();
    let maxHp = hero.maxHp;

    const width = 410;
    const height = 20;
    const margins = 10; // 5 + 5

    let filledBarWidth = ((width - margins) / maxHp) * hp;

    const fullBar = k.add([
        k.rect(width, height),
        k.pos(20, 20),
        k.color(COLORS.BLACK),
        k.fixed(),
    ]);

    const hpBar = fullBar.add([
        k.rect(filledBarWidth, height - 8),
        k.pos(margins / 2, 4),
        k.color(COLORS.RED),
    ]);

    k.onUpdate(() => {
        hp = hero.hp();
        filledBarWidth = ((width - margins) / maxHp) * hp;
        hpBar.width = filledBarWidth;
    });
}
