var idade = 15
console.log(`você tem ${idade} anos`)
if (idade < 16 ){
    console.log('Não vota')
        
    
} else if ( idade < 18 || idade >= 65) { 
        console.log('Voto opncional')

} else {
    console.log('Voto obrigatorio')
}