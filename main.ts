bluetooth.onBluetoothConnected(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Square)
})
bluetooth.startTemperatureService()
basic.showIcon(IconNames.Heart)
