input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Player: game.LedSprite = null
basic.showIcon(IconNames.Pitchfork)
Player = game.createSprite(0, 0)
let Enemy = game.createSprite(randint(1, 4), randint(1, 4))
