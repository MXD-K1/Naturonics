import kaplay from "kaplay";
import { screenWidth, screenHeight } from "./utils/constants.js";

const k = kaplay({
    width: screenWidth,
    height: screenHeight,
    maxFPS: 60,
    letterbox: true,
    global: false,
    debug: true,
    debugKey: "f2",
});

export default k;
