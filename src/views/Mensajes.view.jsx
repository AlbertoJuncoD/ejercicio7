import React from 'react';
import MensajesHeader from '../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../components/MensajesTable/MensajesTable.component';
import './Mensajes.view.scss';
import { useState } from 'react';

export default function Mensajes() {

    const [mensajes, setMensajes] = useState([]);
    const [asunto, setAsunto] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    let manejarCambios = (values) => {
        Object.keys(values).forEach(key => {
            switch (key) {
                case 'asunto':
                    setAsunto(values[key]);
                    break;
                case 'email':
                    setEmail(values[key]);
                    break;
                case 'mensaje':
                    setMensaje(values[key]);
                    break;
                default:
                    break;
            }
        });
    };

    let nuevoMensaje = () => {
        let nuevo = {
            "asunto": asunto,
            "email": email,
            "mensaje": mensaje,
            "leido": false
        };
        setMensajes(mensajes => [...mensajes, nuevo]);
    };

    let eliminarMensajes = () => {
        setMensajes([]);
    };

    let eliminarMensaje = (index) => {
        mensajes.splice(index, 1);
        setMensajes([...mensajes]);
    };


    let leerMensaje = (index) => {
        mensajes[index].leido = !mensajes[index].leido;
        setMensajes([...mensajes]);
    }

    return (
        <div className="Mensajes">
            <MensajesHeader clickNuevo={nuevoMensaje} clickEliminar={eliminarMensajes} manejarCambios={manejarCambios} asunto={asunto} email={email} mensaje={mensaje}>
            </MensajesHeader>

            <MensajesTable mensajes={mensajes} clickEliminarUno={eliminarMensaje} clickMarcarLeido={leerMensaje}>
            </MensajesTable>
        </div>
    );
}