input.onButtonPressed(Button.A, function () {
    basic.showString("\I am Nithesh from Villa College!\")
})
basic.showString("Hello!")
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
