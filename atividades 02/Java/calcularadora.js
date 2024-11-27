
function tabuada() {
    let res = document.getElementById('tabuadas')
    let numero = document.getElementById('num')

        if (numero.value.length == 0){
            window.alert ('[ERRO] digite um numero!')
            
        }
        else{
            let i = Number(numero.value) 
            let c = 1
            res.innerHTML = ''
            for (c; c<=10; c =  c + 1){
                let item = document.createElement('option')
                item.text = `${i} x ${c} = ${i*c}`
                res.appendChild(item)
                
            }
            /*while ( c <= 10){
                let item = document.createElement('option')
                item.text = `${i} x ${i*c} = ${i*c}`
                res.appendChild(item)
                c++
            }*/
            
            
            
            

    }
    }