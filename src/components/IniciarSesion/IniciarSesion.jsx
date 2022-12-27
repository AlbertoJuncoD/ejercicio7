export default function IniciarSesion(props) {

    return (<button type="button" onClick={props.iniciarSesion}>
        {props.estadoSesion ? 'Cerrar Sesion' : 'Iniciar Sesion'}
    </button>)
}
