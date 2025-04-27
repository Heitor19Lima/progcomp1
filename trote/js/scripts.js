// Função chamada pelo HTML
function calcular(){
    // vamos criar 2 variaveis
    // Js as variaveis nao possuem tipo
    let Mascote, Homenagem, Leite, Kit, Suplemento, Soma, Equipe, Sangue
    // recupera o valor do mascote digitdo pelo usuario
    Mascote = Number(document.getElementById("Mascote").value)
    // recupera o valor da homenagem digitdo pelo usuario
    Homenagem = Number(document.getElementById("Homenagem").value)
    // recupera a quantidade de leite
    Leite = Number(document.getElementById("Leite").value)
    // recuperar a qtde de litros de leite
    Kit = Number(document.getElementById("Kit").value)
    // recupera a quantidade avulsa de suplemento
    Suplemento = Number(document.getElementById("Suplemento").value)
    // calcular a soma
     Soma = Number(Mascote) + (Homenagem) + (2 * (Leite)) 
    // Vamos calcular a pontuação considerando metas de kei e supl
     Equipe = document.getElementById("Equipe").value
    if (Equipe == "Laranja"){
        // verifica kit e suplemento
        if (Kit>=97 && Suplemento >= 49){
            Soma = Soma + 5000 + ((Kit-97) * 30) + ((Suplemento - 49) * 15)
        }
        else if (Kit >=78 && Suplemento >= 39){
            Soma = Soma + 4000 + ((kit-78) * 30) + ((Suplemento - 39) *15)
        }
        else if (Kit >=49 && Suplemento >= 25){
            Soma = Soma + 2500 ((Kit-49) * 30) + ((Suplemento - 25) * 15)
        }
        else if (Kit>=19 && Suplemento >= 10){
            Soma = Soma + 1000 ((Kit-19) * 30) + ((Suplemento - 10) * 15)
        }
        // verifica sangue
        if (Sangue >=97){
            Soma = Soma + 2500 + ((Sangue - 49) + 20) 
        }
        else {
            Soma = Soma + (Sangue * 20)
        }

    }
    else if (Equipe == "Preta"){
        // verifica kit e suplemento

        // verifica sangue
        if (Sangue >=52){
            Soma = Soma 
        }

    }
    else if (Equipe == "Roxa"){

    }
    else if (Equipe == "Verde"){

    }
    else {// equipe vermelha

    }

    //  Doação de sangue
    Sangue = Number(document.getElementById("Sangue").value)  

    // retorna o valor html
    // template string
    document.getElementById("Soma").innerHTML =`A Soma é ${Soma}`
}