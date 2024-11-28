var tempo = new Date()
var hora = tempo.getHours()


console.log(`agora são exatamente ${hora} H`)

if (hora > 0 && hora < 6){
    console.log('madrugada')
        
    
} else if (hora < 12 && hora >= 6) { 
    console.log('bom dia ')

} else if (hora < 18)  {
console.log('boa tarde')

} else if (hora <= 24 ){
    console.log('boa noite')
}