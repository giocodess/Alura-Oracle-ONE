  import { APIconectaAPI } from "./conectaAPI.js";

  const lista = document.querySelector('[data-lista');

  export default function constroiCard(titulo, descricao, url, imagem){
    const video = document.createElement('li');
    video.className = 'videos__item'
    video.innerHTML = `<li class="videos__item">
      <iframe width="100%" height="72%" src="${url}"                title="${titulo}" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      <div class="descricao-video">
          <img src=${imagem}"logo canal alura">
          <h3>${titulo}</h3>
          <p>${descricao}</p>
      </div>`
    return video;
  }

  async function listaVideo(){
    try{
    const listaAPI = await APIconectaAPI.listaVideos()
    listaAPI.forEach(element => lista.appendChild(constroiCard(
      element.titulo, element.descricao, element.url, element.imagem)));
  }catch{
    lista.innerHTML = `<h2 class='mensagem__titulo'>Não foi possivel carregar a lista de videos, tente novamente mais tarde!</h2>`
  }
}
  listaVideo()