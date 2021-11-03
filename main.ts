let resetNeed = true;
let changed = false;
let number = 0;

input.onShake(() => {
    if (resetNeed) {
        resetNeed = false;
        if (changed) {
            number = randint(1, 6);
        } else {
            number = randint(1, 10);
        }
        ani(50);
        showNumber(number);
    }
});

input.onButtonPressed(Button.A, () => {
    if (!resetNeed) {
        resetNeed = true;
        basic.clearScreen();
    }
});

input.onButtonPressed(Button.B, () => {
    if (changed) {
        changed = false;
        showNumber(6);
    } else {
        changed = true
        showNumber(10);
    }
});

function showNumber(number: number) {
    switch(number) {
        case 1:
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `);
            break;
        
        case 2:
            basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . . . . .
            . . . . .
            `);
            break;

        case 3:
            basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . # . # .
            . . . . .
            `);
            break;

        case 4:
            basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `);
            break;

        case 5:
            basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `);
            break;

        case 6:
            basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `);
            break;

        case 7:
            basic.showLeds(`
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            `);
            break;

        case 8:
            basic.showLeds(`
            # . . . #
            . . # . .
            # . . . #
            . . # . .
            # . . . #
            `);
            break;

        case 9:
            basic.showLeds(`
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            `);
            break;

        case 10:
            basic.showLeds(`
            # . . . #
            . . # . .
            # # . # #
            . . # . .
            # . . . #
            `);
            break;

        default:
            basic.showIcon(IconNames.No);
    }
    pause(350);
    for (let i=0; i<number;i++) {
        music.playTone(Note.C, 200);
        pause(200);
    }
}

function ani(delay: number) {
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `, delay);
    basic.showLeds(`
        # . # . #
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        `, delay);
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        . . . . .
        `, delay);
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        `, delay);
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `, delay);
    basic.showLeds(`
        . . . . .
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `, delay);
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        # . # . #
        # . # . #
        `, delay);
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        # . # . #
        `, delay);
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        `, delay);
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `, delay);
}