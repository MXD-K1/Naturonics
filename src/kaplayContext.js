import kaplay from "kaplay";

const k = kaplay({
  width: 1280,
  height: 720,
  letterbox: true,
  global: false,
  debug: true,
  debugKey: "f2",
});

export default k;
