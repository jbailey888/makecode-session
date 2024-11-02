basic.showString("Jeff")
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.showIcon(IconNames.Angry)
basic.pause(100)
music.play(music.stringPlayable("A G E E A B C5 C5 ", 200), music.PlaybackMode.UntilDone)
music.play(music.createSoundExpression(WaveShape.Square, 3888, 2314, 132, 0, 743, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
