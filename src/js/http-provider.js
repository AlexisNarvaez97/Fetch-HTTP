const jokeUrl = "https://api.chucknorris.io/jokes/random";

const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Cloudinary

const preset = 'kuam9mdm';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dxsckrdnx/upload';


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

const subirImagen = async ( archivoSubir ) => {

    const formData = new FormData();
    formData.append('upload_preset', preset);
    formData.append('file', archivoSubir);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResponse = await resp.json();
            console.log(cloudResponse);
            return cloudResponse.secure_url;
        } else {
            throw await resp.json();
        }
        
    } catch (err) {
        throw err;
    }


}


export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
};