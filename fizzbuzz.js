let numero = 3
const numeroDivisivelTres = 3
const numeroDivisivelCinco = 5
// verifica o resto da divisão entre numero e numero divisivel
let resultadoDivisao = numero % numeroDivisivelTres == 0
let mensagemErro = " Esse número não é divisivel nem por 3 nem por 5"

if(resultadoDivisao) {
    const mensagemEhDivisivelPorTres = "Fizz"   
    console.log(mensagemEhDivisivelPorTres)
} else {
    console.log(mensagemErro)
}
