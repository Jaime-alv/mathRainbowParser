import { MAX_DECIMALS } from "../settings/configuration";

export function add(addendOne: number, addendTwo: number): number {
    return addendOne + addendTwo;
}

export function subtract(minuend: number, subtrahend: number): number {
    return minuend - subtrahend;
}

export function multiply(multiplier: number, multiplicand: number): number {
    return multiplier * multiplicand;
}

export function divide(dividend: number, divisor: number): number {
    const maxDecimals = Math.pow(10, MAX_DECIMALS);
    const result: number = dividend / divisor;
    return Math.round(result * maxDecimals) / maxDecimals;
}
