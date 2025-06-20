
let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
         }else { 
            return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != - 1) {
        return true
         }else { 
            return false
    } 
}

function Adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = ` Valor ${num.value} Adicionado `
        lista.appendChild(item)
         }else { 
            window.alert('[ERRO] Valor invalido ou já encontrado')
    }
}

function Finalizar () {
    if (num.value.length === 0) {
        window.alert('[ERRO] Por favor Adicione numeros antes de finalizar')
         }else { 
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0


            for (let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor) 
                    menor = valores[pos]
                media = soma/tot
            }

            res.innerHTML = `<p> Autodo temos ${tot} Numeros Cadastrados </p>`
            res.innerHTML += `<p> Onde o maior Numero È ${maior} </p>`
            res.innerHTML += `<p> E o menor numero È ${menor} </p>`
            res.innerHTML += `<p> Em media temos ${media.toFixed(2)} </p>`
    }
}