/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example
solution('camelCasing') // => should return 'camel Casing'
*/

function solution1(string) {
    let str = ''
    for (letter of string) {
        if (letter === letter.toUpperCase()) {
            str += ' '
            str += letter
        }
        else {
            str += letter
        }
    }
    return str
}
console.log(solution1("abcdEfgh"))

// complete the function
function solution2(string) {
    return (string.replace(/([A-Z])/g, ' $1'));
}
console.log(solution2("abcdEfgh"))
