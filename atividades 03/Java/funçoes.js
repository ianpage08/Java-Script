let lista = document.getElementById('tabuadas')
let num = document.getElementById('num')
let resposta = document.getElementById('res')
let valores = []

function isNumero(n) {
    if ( Number(n) >= 1 && Number(n) <=100 ){
        return true }
    else {
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true

    }
    else {
        return false
    }

}
function adicionar(){

    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = (`Valor ${num.value} adicionado`)
        lista.appendChild(item)
        resposta.innerHTML = ''

    }else {
        window.alert('[ERRO]valor invalido ou já encontrado na lista ') }
    num.value = ''
    num.focus()
}
function Finalizar(){
    let rr = document.createElement('p')
    resposta.appendChild(rr)
    
    if (valores.length == 0){
        window.alert('coloque os valores e tente novamente')
    } else {
        let maior = valores[0]
        let total = valores.length
        let menor = valores[0] 
        let  soma = 0
        let media = 0
        
        for (let pos in valores){
            soma += valores[pos]
            media += valores[pos] /2

            if (valores [pos] > maior) {
                maior = valores[pos]
            }
            else if (valores [pos] < menor){
                menor = valores[pos]
            }

        rr.innerHTML = ''
        rr.innerHTML += `<p>temos um total de ${total} números cadastrados </p> `
        rr.innerHTML += `<p>o maior entre todos os Números é ${maior}</p>` 
        rr.innerHTML += `<p>o Menor  de valores cadastrados é ${menor}</p>`
        rr.innerHTML += `<p>soma de todos os valores cadastrados é  ${soma}</p>`
        rr.innerHTML += `<p>á Média  dos valores cadastrados é ${media}</p>`
        }
    }
    
    
}


function indexOf(){}