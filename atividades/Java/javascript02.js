function Carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')   
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} H`
    if (hora >= 0 && hora < 12) {
        document.body.style.backgroundColor = '#e59402'
        img.src = 'imagens/manha.jpg'
    }
    else if ( hora >=12 && hora < 18)
    {
        document.body.style.backgroundColor = '#e2cd9f'
        img.src = 'imagens/tarde.jpg'
    }
    else { 
        document.body.style.backgroundColor = '#92beeb'
        img.src = 'imagens/noite.jpg'
    }

}



