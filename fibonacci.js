/**
* @param {ingeger} input  valut to calculate the Fibonacci number
* @returns {number} value of max fibonaccis number
*/
module.exports = (input) => {
    console.log(num)
    if (typeof(input) === 'number' && input >= 0 && Number.isInteger(input)){
        let fibonacciArray = [0,1];

        for (let i = fibonacciArray.length; i <= input; i++) {
            fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1]);
        }

        return fibonacciArray[input]
    }
    throw new Error('Parameters are wrong')
}   
