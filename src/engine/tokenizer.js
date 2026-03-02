/**
 * TOKENIZER
 * ----------
 * This function takes a math expression string
 * and converts it into structured tokens.
 *
 * Example:
 * "5*-(-2)"
 * → [5, "*", "u-", "(", "u-", 2, ")"]
 *
 * What this handles:
 * - Multi digit numbers (12, 345)
 * - Decimal numbers (3.14)
 * - Unary minus (u-)
 * - Binary operators (+ - * /)
 * - Brackets
 * - Throws error if number format is invalid
 */

export function tokenize(expression) {

    // this will store final tokens
    let token = [];

    // allowed digits and decimal point
    let digitOrSym = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

    // only real binary operators
    const binaryOperators = ["+", "-", "*", "/"];

    // unary operators (currently only unary minus)
    const unaryOperators = ["u-"];

    // temporary number builder (example: building "123")
    let currentNumber = "";

    // this stores last pushed logical token
    // helps us detect unary vs binary minus
    let previousToken = null;


    // loop through every character in expression
    for (let char of expression) {

        // if it's digit or decimal → keep building number
        if (digitOrSym.includes(char)) {
            currentNumber += char;
        }

        // if current char is NOT digit and we were building a number
        // means number ended → so push it
        else if (currentNumber) {
            validatNum(currentNumber); // check decimal validity
            token.push(Number(currentNumber)); // convert string to actual number
            previousToken = Number(currentNumber); // update state
            currentNumber = ""; // reset builder
        }

        // now check if it's binary operator
        if (binaryOperators.includes(char)) {

            // if not minus → simple binary operator
            if (char !== '-') {
                token.push(char);
                previousToken = char;
            }

            // if minus → could be unary or binary
            else {

                // unary if:
                // - start of expression
                // - previous token was binary operator
                // - previous token was "("
                // - previous token was already unary operator
                if (
                    previousToken == null ||
                    binaryOperators.includes(previousToken) ||
                    previousToken == "(" ||
                    unaryOperators.includes(previousToken)
                ) {
                    token.push("u-");
                    previousToken = "u-";
                }

                // otherwise it's normal binary minus
                else {
                    token.push("-");
                    previousToken = "-";
                }
            }
        }

        // if it's bracket
        else if (char == "(" || char == ")") {
            token.push(char);
            previousToken = char;
        }
    }

    // after loop ends, if number still exists → push it
    if (currentNumber) {
        validatNum(currentNumber);
        token.push(Number(currentNumber));
    }

    return token;
}


// checks if number has more than one decimal point
// example: 3.2.1 → invalid
function validatNum(currentNumber) {

    let count = 0;

    for (let numChar of currentNumber) {
        if (numChar == '.') count++;
    }

    if (count > 1) {
        throw new Error("Invalid number format");
    }
}


// test
console.log(tokenize("-(3+(2*-4))"));