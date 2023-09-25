function toggoloMode() {
  const html = document.documentElement
 
  html.classList.toggle('light')

  //pegue imagem
  const img = document.querySelector("#profile img")

 if (html.classList.contains('light')){
    // se tiver lightmode adicionar imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else { 
    img.setAttribute('src','./assets/avatar.png')

  } 




   
  //substituir
  
}
