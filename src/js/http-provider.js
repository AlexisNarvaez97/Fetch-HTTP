const jokeUrl = "https://api.chucknorris.io/jokes/random";

const urlUsuarios = 'https://reqres.in/api/users?page=2';


const obtenerChiste = async() => {

    const resp = await fetch(jokeUrl);

    if(!resp.ok) throw ('No se pudo realiar la peticion');

    const { icon_url, id, value } = await resp.json();

    return {
        icon_url,
        id,
        value
    };

}

const obtenerUsuarios = async () => {

    const respuesta = await fetch(urlUsuarios);

    const { data: usuarios } = await respuesta.json();

    return usuarios;
};


export {
    obtenerChiste,
    obtenerUsuarios
};