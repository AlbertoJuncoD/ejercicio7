/* Fichero redux/actions/index.js */

export const ACTIONS_MENSAJES = {
    VACIAR: "VACIAR_MENSAJES",
    BORRAR: "BORRAR_MENSAJES",
    CREAR: "CREAR_MENSAJES",
    LEER: "LEER_MENSAJES"
}

export const borrarMensaje = (index) => {
    return {
        type: ACTIONS_MENSAJES.BORRAR,
        payload: index
    }
}

export const vaciarMensajes = () => {
    return {
        type: ACTIONS_MENSAJES.VACIAR
    }
}

export const crearMensaje = (msg) => {
    return {
        type: ACTIONS_MENSAJES.CREAR,
        payload: msg
    }
}

export const leerMensaje = (index) => {
    return {
        type: ACTIONS_MENSAJES.LEER,
        payload: index
    }
}

export const ACTIONS_SESION = {
    CERRAR: "CERRAR_SESION",
    INICIAR: "INICIAR_SESION"
}

export const iniciarSesion = (sesion) => {
    return {
        type: ACTIONS_SESION.INICIAR,
        payload: sesion
    }
}

export const cerrarSesion = (sesion) => {
    return {
        type: ACTIONS_SESION.CERRAR,
        payload: sesion
    }
}