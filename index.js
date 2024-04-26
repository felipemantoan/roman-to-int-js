/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    return s.split('')
        .map((letter, index, numbers) => {
            const value = symbols[letter]
        
            if (index < (numbers.length-1)) {

                if (value >= symbols[numbers[index+1]]) {
                    return value
                }

                return value * -1
            }

            return value

        })
        .reduce((accumulator, currentValue) => accumulator + currentValue)

}

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))