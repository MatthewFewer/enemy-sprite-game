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
game.setScore(0)
Player = game.createSprite(0, 0)
let Enemy = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (Player.isTouching(Enemy)) {
        Enemy.delete()
        game.addScore(1)
        Enemy = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
