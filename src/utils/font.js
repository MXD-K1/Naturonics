const FONTS = {
    button: { font: "sinko", size: 24 }, // numbers might need changing
    dialog: { size: 16, width: 500 },
    notification: { font: "sinko", size: 20 },
    label: { font: "sinko", size: 20 },
    big_label: { font: "sinko", size: 48 },
    questTitle: { size: 30, width: 500 },
    questInfo: { size: 24, width: 500 },
    // fill in the rest when needed
};

export function getFont(component) {
    return FONTS[component];
}
