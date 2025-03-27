// Função chamada pelo HTML
function calcular(){
    // vamos criar 2 variaveis
    // Js as variaveis nao possuem tipo
    let Mascote, Homenagem, Leite, KitAvulso, SuplementoAvulso
    // recupera o valor do mascote digitdo pelo usuario
    Mascote = document.getElementById("Mascote").value
    // recupera o valor da homenagem digitdo pelo usuario
    Homenagem = document.getElementById("Homenagem").value
    // recupera a quantidade de leite
    Leite = document.getElementById("Leite").value
    // recuperar a qtde de litros de leite
    KitAvulso = document.getElementById("KitAvulso").value
    // recupera a quantidade avulsa de suplemento
    SuplementoAvulso = document.getElementById("SuplementoAvulso").value
    // calcular a soma
    let soma = Number(Mascote) + Number(Homenagem) + (2 * Number(Leite)) + (30 * Number(KitAvulso)) + (15 * Number(SuplementoAvulso))
    // retorna o valor html
    document.getElementById("soma").innerHTML =`A soma é ${soma}`
}