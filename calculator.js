var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed!");
        }
        return a / b;
    };
    return Calculator;
}());
// Example usage
var calculator = new Calculator();
console.log(calculator.add(5, 3));
console.log(calculator.subtract(7, 2));
console.log(calculator.multiply(4, 6));
console.log(calculator.divide(10, 2));
