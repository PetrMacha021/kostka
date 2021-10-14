def on_forever():
    aIsPressed = input.button_is_pressed(Button.A)
    if aIsPressed:
        basic.show_icon(IconNames.HEART)
    else:
        bIsPressed = input.button_is_pressed(Button.B)
        if bIsPressed:
            basic.show_icon(IconNames.DIAMOND)

basic.forever(on_forever)
