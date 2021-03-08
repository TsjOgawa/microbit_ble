basic.show_leds("""
    # . # # #
    . . . . .
    . # . . .
    . . . . #
    . . . # .
    """)

def on_forever():
    control.raise_event(input.rotation(Rotation.PITCH),
        EventBusValue.MICROBIT_EVT_ANY)
    basic.show_string("Hello!")
basic.forever(on_forever)
