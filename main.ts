basic.forever(function () {
    pins.servoWritePin(AnalogPin.P14, pins.map(
    input.rotation(Rotation.Pitch),
    -90,
    90,
    -180,
    180
    ))
    pins.servoWritePin(AnalogPin.P15, pins.map(
    input.rotation(Rotation.Pitch),
    -90,
    90,
    -180,
    180
    ))
})
