import './MensajesHeader.component.scss';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export default function MensajesHeader(props) {

    const initialValues = {
        asunto: '',
        email: '',
        mensaje: '',
    }


    const validaciones = Yup.object().shape({
        asunto: Yup.string()
            .required('Por favor, escribe el asunto.'),
        email: Yup.string()
            .required('Por favor, escribe tu email.')
            .email('Email no valido.'),
        mensaje: Yup.string()
            .required('Por favor, escribe tu mensaje.')
            .min(10, 'Mínimos 10 carácteres.'),
    });

    let submit = (values) => {
        console.log(values)
        props.clickNuevo(values);
    }

    return (
        <div className="MensajesHeader">
            <Formik initialValues={initialValues} validationSchema={validaciones} onSubmit={submit}>
                {({ touched, errors }) => (
                    <Form className="Formulario">
                        <div>
                            <Field placeholder='Asunto:' type="text" name='asunto' />
                            {errors.asunto && touched.asunto ? (<div>{errors.asunto}</div>) : null}
                        </div>
                        <div>
                            <Field placeholder='Email:' type="email" name='email' />
                            {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
                        </div>
                        <div>
                            <Field placeholder='Mensaje:' type="text" name='mensaje' />
                            {errors.mensaje && touched.mensaje ? (<div>{errors.mensaje}</div>) : null}
                        </div>
                        <button type="submit" className="Nuevo">Nuevo</button>
                        <button type="button" onClick={props.clickEliminar} className="Vaciar">Vaciar</button>
                    </Form>
                )}
            </Formik>
        </div >
    );
}