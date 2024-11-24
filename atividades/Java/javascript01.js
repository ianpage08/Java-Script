function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Preencha novamente e tente novamente!')
    } 
    else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <= 15 ){
            img.setAttribute('src', 'Java/menino.jpg')}
            else if (idade < 50){
                img.setAttribute('src', 'Java/homem.jpg')}
            else if (idade < 80) {
                img.setAttribute('src', 'Java/homem idoso.jpg')}
            else {
                {
                    img.setAttribute('src', 'Java/images.jpeg')}
            }
        }
        else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <= 15){
                img.setAttribute('src', 'Java/menina.jpg')}
                else if ( idade < 50 ){
                    img.setAttribute('src', 'Java/mulher.jpg')}
                else if (idade < 80){
                    img.setAttribute('src', 'Java/mulher idosa.jpg')}
                else {
                    img.setAttribute('src', 'Java/images.jpeg')}
        } 
        res.style.fontSize = '1.5em'
        res.style.textAlign = 'center'
        res.innerHTML = `Você tem ${idade} anos e é ${genero}`
        res.appendChild(img)
    } 
}