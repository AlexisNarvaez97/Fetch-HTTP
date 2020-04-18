import { obtenerChiste } from "./http-provider";


const body = document.body;
let btnChiste, olList;


const crearHtml = () => {

    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary"> Agregar chiste </button>

        <ol class="mt-2 list-group">
        </ol>    
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);

}


const eventos = () => {

    btnChiste = document.querySelector('button');
    olList = document.querySelector('ol');

    btnChiste.addEventListener('click', async () => {

        dibujarChiste( await obtenerChiste());
        
    })

};

const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b> ${chiste.id}</b> |  ${chiste.value} `;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
}

export const init = () => {
    crearHtml();
    eventos();
}