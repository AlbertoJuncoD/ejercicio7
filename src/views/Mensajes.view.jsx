import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MensajesHeader from '../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../components/MensajesTable/MensajesTable.component';
import { borrarMensaje, crearMensaje, leerMensaje, vaciarMensajes } from '../redux/actions';
import './Mensajes.view.scss';

export default function Mensajes() {

    // const [mensajes, setMensajes] = useState([]);

    // const [asunto, setAsunto] = useState('');
    // const [email, setEmail] = useState('');
    // const [mensaje, setMensaje] = useState('');
    const mensajes = useSelector(state => state.mensajes);  // El estado inicial será '[]'
    const dispatch = useDispatch();

    let crear = ({ asunto, email, mensaje }) => {
        let nuevo = {
            "asunto": asunto,
            "email": email,
            "mensaje": mensaje,
            "leido": false
        };
        dispatch(crearMensaje(nuevo));
    }

    let vaciar = () => { dispatch(vaciarMensajes()); }

    let eliminar = (index) => { dispatch(borrarMensaje(index)); }

    let leer = (index) => { dispatch(leerMensaje(index)) }

    // let manejarCambios = (values) => {
    //     Object.keys(values).forEach(key => {
    //         switch (key) {
    //             case 'asunto':
    //                 setAsunto(values[key]);
    //                 break;
    //             case 'email':
    //                 setEmail(values[key]);
    //                 break;
    //             case 'mensaje':
    //                 setMensaje(values[key]);
    //                 break;
    //             default:
    //                 break;
    //         }
    //     });
    // };

    // let nuevoMensaje = () => {
    //     let nuevo = {
    //         "asunto": asunto,
    //         "email": email,
    //         "mensaje": mensaje,
    //         "leido": false
    //     };
    //     setMensajes(mensajes => [...mensajes, nuevo]);
    // };

    // let eliminarMensajes = () => {
    //     setMensajes([]);
    // };

    // let eliminarMensaje = (index) => {
    //     mensajes.splice(index, 1);
    //     setMensajes([...mensajes]);
    // };


    // let leerMensaje = (index) => {
    //     mensajes[index].leido = !mensajes[index].leido;
    //     setMensajes([...mensajes]);
    // }

    return (

        <div className="Mensajes">
            <MensajesHeader clickNuevo={crear} clickEliminar={vaciar}>
            </MensajesHeader>
            <MensajesTable mensajes={mensajes}
                clickEliminarUno={eliminar} clickMarcarLeido={leer}>
            </MensajesTable>
        </div>
    );
}