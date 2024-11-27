
function contar() {
let res = document.getElementById('resultado')
let inicio = document.getElementById('com')
let fim = document.getElementById('final')
let passo = document.getElementById('pular')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert ('[ERRO] Insira os dados novamente e tente!')
        res.innerHTML ='Preparando Contagem..'
    }
    else{
        
        //var ress = Number(inicio.value) <= Number(fim.value)
        let i = Number(inicio.value) 
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML =' Contando: '
        
        if (i <= f ){
            for (let c = i; c <= f ; c = c + p)
            {
             res.innerHTML += ` ${c} \&#x1F449`
        } res.innerHTML += '\&#x1F6D1'}
        else if (i >= f ){
            for (let c = i; c >= f ; c = c - p)
            {
             res.innerHTML += ` ${c} \&#x1F449`
        } res.innerHTML += '\&#x1F6D1'}

/*
        while (i <= f){
            res.innerHTML = `${i} Passo`
            i = i + p
        }*/
        
         
          //res.innerHTML = ` resultado ${ress} ` 
        
    

    }
    
}
