let numero = 5
const numeroDivisivelTres = 3
const numeroDivisivelCinco = 5
// verifica o resto da divisão entre numero e numero divisivel
let resultadoDivisaoPorTres = numero % numeroDivisivelTres == 0
let resultadoDivisaPorCinco = numero % numeroDivisivelCinco == 0
let mensagemErro = " Esse número não é divisivel nem por 3 nem por 5"

if(resultadoDivisaoPorTres) {
    const mensagemEhDivisivelPorTres = "Fizz"   
    console.log(mensagemEhDivisivelPorTres)
} else if (resultadoDivisaPorCinco){
    const mensagemEhDivisivelPorCinco = "Buzz"
    console.log(mensagemEhDivisivelPorCinco)
} else {
    console.log(mensagemErro)
}
