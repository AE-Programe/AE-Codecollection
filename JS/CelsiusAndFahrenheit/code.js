let toCelsius = function(fValue) {
    return Math.round(((fValue - 32) * 5) / 9)
}

let toFahrenheit = function(cValue) {
    return Math.round(((cValue / 5) * 9) + 32)
}