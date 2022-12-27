/* Fichero redux/reducers/index.js */
import { ACTIONS_SESION } from '../actions';



const initialState = {
    sesion: false
};

export const sesion = (state = initialState.sesion, action) => {
    switch (action.type) {
        case ACTIONS_SESION.INICIAR:
            state = true;

            return state;
        case ACTIONS_SESION.CERRAR:
            state = false;

            return state;
        default:
            return state;
    }
}

export default sesion;