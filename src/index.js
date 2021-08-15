module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero'
    }
    if (number < 100) {
        return twoDigitToStr(number).trim()
    }
    const hundreds = Math.floor(number / 100)
    return `${digitToStr(hundreds)} hundred ${twoDigitToStr(number % 100)}`.trim()
}
function digitToStr (digit) {
    switch (digit) {
        case 1: return 'one'
        case 2: return 'two'
        case 3: return 'three'
        case 4: return 'four'
        case 5: return 'five'
        case 6: return 'six'
        case 7: return 'seven'
        case 8: return 'eight'
        case 9: return 'nine'
        default: return ''
    }
}
function twoDigitToStr(number) {
    if (number < 10) {
        return digitToStr(number)
    }
    if (number < 20) {
        switch (number) {
            case 10: return 'ten'
            case 11: return 'eleven'
            case 12: return 'twelve'
            case 13: return 'thirteen'
            case 14: return 'fourteen'
            case 15: return 'fifteen'
            case 16: return 'sixteen'
            case 17: return 'seventeen'
            case 18: return 'eighteen'
            case 19: return 'nineteen'
        }
    }
    const digit = digitToStr(number % 10)
    const dozens = number - number % 10
    switch (dozens) {
        case 20: return `twenty ${digit}`
        case 30: return `thirty ${digit}`
        case 40: return `forty ${digit}`
        case 50: return `fifty ${digit}`
        case 60: return `sixty ${digit}`
        case 70: return `seventy ${digit}`
        case 80: return `eighty ${digit}`
        case 90: return `ninety ${digit}`
    }
}
