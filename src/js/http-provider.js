const jokeUrl = "https://api.chucknorris.io/jokes/random";


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


export {
    obtenerChiste
};