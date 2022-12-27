/* Fichero redux/index.js */
import { createStore, combineReducers } from 'redux';
import mensajes from './reducers/mensajes.reducer';
import sesion from './reducers/sesion.reducer';


let reducers = combineReducers({
    mensajes: mensajes,
    sesion: sesion

});
// STORE - El estado global de la aplicación.
let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;