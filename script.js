function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fAno = document.getElementById('txtano')
  let res = document.getElementById('res')
  if ( fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert('[ERRO Verifique os dados e tente novamente!')
  } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fAno.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', './img/Homem-child.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', './img/Homem-Jovem.png')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', './img/Homem-Adulto.png')
      } else {
        // Idoso
        img.setAttribute('src', './img/Homem-Idoso.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >=0 && idade < 10) {
        //Criança
        img.setAttribute('src', './img/Mulher-child.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', './img/Mulher-jovem.png')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', './img/Mulher-Adulta.png')
      } else {
        // Idoso
        img.setAttribute('src', './img/Mulher-idosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
  
}