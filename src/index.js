// import { init } from "./js/chistes-page";
// import { obtenerUsuarios } from "./js/http-provider";
// import { initUsuarios } from "./js/usuarios-page";

import * as CRUD from './js/crud';


// CRUD.getUsuario(2).then( console.log);

// CRUD.crearUsuario({
//     name: 'Alexis',
//     job: 'Developer'
// }).then( console.log);

CRUD.actualizarUsuario(1, {
    name: 'Gerardo',
    job: 'Sock'
}).then(console.log)

CRUD.borrarUsuario(1).then( console.log );

// init();

// initUsuarios();

// obtenerUsuarios().then( console.log);