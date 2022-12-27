import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IniciarSesion from "../components/IniciarSesion/IniciarSesion";
import { cerrarSesion, iniciarSesion } from "../redux/actions";

export default function Sesion() {

    const dispatch = useDispatch();
    const sesion = useSelector(state => state.sesion);  // El estado inicial será false
    let iniciar = () => {
        dispatch(iniciarSesion(true));
    }
    let cerrar = () => {
        dispatch(cerrarSesion(false));
    }

    return (

        <div className="Mensajes">
            <IniciarSesion iniciarSesion={sesion ? cerrar : iniciar} estadoSesion={sesion}>
            </IniciarSesion>
        </div>
    );
}