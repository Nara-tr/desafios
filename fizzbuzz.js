function calculateRemainderDivision(number, divisibleNumber) {
    const calculationResult = number % divisibleNumber == 0
    return calculationResult
}


let numero = 4
const numeroDivisivelTres = 3
const numeroDivisivelCinco = 5
// verifica o resto da divisão entre numero e numero divisivel
let resultadoDivisaoPorTres = calculateRemainderDivision(numero, numeroDivisivelTres)
let resultadoDivisaPorCinco = calculateRemainderDivision(numero, numeroDivisivelCinco)
let mensagemErro = " Esse número não é divisível nem por 3 nem por 5"

if(resultadoDivisaoPorTres) {
    const mensagemEhDivisivelPorTres = "Fizz"   
    console.log(mensagemEhDivisivelPorTres)
} else if (resultadoDivisaPorCinco) {
    const mensagemEhDivisivelPorCinco = "Buzz"
    console.log(mensagemEhDivisivelPorCinco)
} else {
    console.log(mensagemErro)
}

