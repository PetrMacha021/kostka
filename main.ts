let reset = true;

input.onShake(() => {
    if (reset) {
        reset = false;
        basic.showNumber(randint(1, 6));
    }
});

input.onButtonPressed(Button.A, () => {
    if (!reset) {
        reset = true;
        basic.clearScreen();
    }
});