basic.forever(function () {
    pins.servoWritePin(AnalogPin.P14, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    -180,
    180
    ))
    pins.servoWritePin(AnalogPin.P15, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    -180,
    180
    ))
})
