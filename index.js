const calculate = require('./fibonacci');
const param = Number(process.argv[2]);

if (!Number.isInteger(param) || param < 0) process.exit(5);
console.log(`Fibonaccis number for ${param} is ${calculate(param)}`);
process.exit(0);
