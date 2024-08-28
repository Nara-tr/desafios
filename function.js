function calculateRemainderDivision(number, divisibleNumber) {
    const calculationResult = number % divisibleNumber == 0
    return calculationResult
}

const result = calculateRemainderDivision(5, 5)
console.log("Teste:", result)