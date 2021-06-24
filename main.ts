bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    bluetooth.uartWriteNumber(input.temperature())
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Square)
})
bluetooth.startTemperatureService()
basic.showIcon(IconNames.Heart)
