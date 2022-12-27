/* Fichero redux/reducers/index.js */
import { ACTIONS_MENSAJES } from '../actions';



const initialState = {
    mensajes: [],
    sesion: false
};

export const mensajes = (state = initialState.mensajes, action) => {
    switch (action.type) {
        case ACTIONS_MENSAJES.BORRAR:
            state.splice(action.payload, 1);

            return [...state];
        case ACTIONS_MENSAJES.VACIAR:
            return [];
        case ACTIONS_MENSAJES.CREAR:
            state.push(action.payload);

            return [...state];
        case ACTIONS_MENSAJES.LEER:
            state[action.payload].leido = !state[action.payload].leido;

            return [...state];
        case ACTIONS_MENSAJES.SESION:
            state[action.payload].sesion = !state[action.payload].sesion;
            return [...state];
        default:
            return [...state];
    }
}

export default mensajes;