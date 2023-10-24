"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
const configuration_1 = require("../settings/configuration");
function add(addendOne, addendTwo) {
    return addendOne + addendTwo;
}
exports.add = add;
function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}
exports.subtract = subtract;
function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand;
}
exports.multiply = multiply;
function divide(dividend, divisor) {
    const maxDecimals = Math.pow(10, configuration_1.MAX_DECIMALS);
    const result = dividend / divisor;
    return Math.round(result * maxDecimals) / maxDecimals;
}
exports.divide = divide;
