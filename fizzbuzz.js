function calculateRemainderDivision(number, divisibleNumber) {
    const calculationResult = number % divisibleNumber == 0
    return calculationResult
}

function fizzBuzz(number) {
    const numeroDivisivelTres = 3
    const numeroDivisivelCinco = 5
    // verifica o resto da divisão entre numero e numero divisivel
    let resultadoDivisaoPorTres = calculateRemainderDivision(number, numeroDivisivelTres)
    let resultadoDivisaoPorCinco = calculateRemainderDivision(number, numeroDivisivelCinco)
    let mensagemErro = " Esse número não é divisível nem por 3 nem por 5"
    
    if(resultadoDivisaoPorTres && resultadoDivisaoPorCinco) {
        const mensagemEhDivisivelPorTresEhCinco = "Fizzbuzz"
        console.log(mensagemEhDivisivelPorTresEhCinco)
    } else if (resultadoDivisaoPorTres) {
        const mensagemEhDivisivelPorTres = "Fizz"   
        console.log(mensagemEhDivisivelPorTres)
    }  else if (resultadoDivisaoPorCinco) {
        const mensagemEhDivisivelPorCinco = "Buzz"
        console.log(mensagemEhDivisivelPorCinco)
    }  else {
        console.log(mensagemErro)
    }
}

fizzBuzz(15)