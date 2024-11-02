basic.show_string("Jeff")
basic.show_icon(IconNames.HEART)
basic.pause(100)
basic.show_icon(IconNames.ANGRY)
basic.pause(100)
music.play(music.string_playable("A G E E A B C5 C5 ", 200),
    music.PlaybackMode.UNTIL_DONE)

def on_forever():
    pass
basic.forever(on_forever)
