// Aボタンでパンチのカウントを表示
input.onButtonPressed(Button.A, function () {
    basic.showString("P")
    basic.showNumber(count)
    basic.pause(500)
    basic.clearScreen()
})
// 拳を突き出す揺れでカウントアップ。ご褒美用にカウントが一定回数に達すると三種からランダムに顔文字が表示されるように設定。
input.onGesture(Gesture.Shake, function () {
    count += 1
    basic.showString("P")
    basic.pause(200)
    basic.clearScreen()
    if (count % 5 == 0) {
        k += randint(0, 2)
        if (k == 0) {
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(1000)
            basic.clearScreen()
        } else if (k == 1) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(1000)
            basic.clearScreen()
        } else if (k == 2) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
})
// Bボタンで労りの言葉も一緒にカウントをリセット。
input.onButtonPressed(Button.B, function () {
    basic.showString("OTU!")
    count = 0
    basic.pause(500)
    basic.clearScreen()
})
let k = 0
let count = 0
count = 0
k = 0
