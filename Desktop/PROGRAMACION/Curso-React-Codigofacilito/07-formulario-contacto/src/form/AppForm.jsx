import { Formik, Field, Form, ErrorMessage } from 'formik';

function AppForm(){

    return(
        <Formik
        initialValues={{ message: "Hola te contacto por ..."}}
        validate ={ values => {
            let errors ={};
            if(!values.name){
                errors.name = 'Este campo es requerido';
            } else if(!values.email){
                errors.email = 'Este campo es requerido';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ){
                errors.emmail = 'El correo no es valido';
            }
            return errors;
        } }
        onSubmit={
            (values, {setSubmitting}) => {
                //realizar una cuenta en formspree.com
                //esto hace que el message se te envie a tu correo
                let url = 'https://formspree.com/urlbrindada';
                let formData = new FormData();
                formData.append('name', values.name);
                formData.append('email', values.email);
                formData.append('message', values.message);

                fetch(url, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => { setSubmitting(false);
                    alert('Gracias por contactarse');
                })
            }
        }
        >
            {
                // ({isSubmiting}) => {
                //     return();
                // }
                ({ isSubmitting, values }) => (
                    <Form className='form'>
                        <div>
                            <label htmlFor="name">Nombre:</label>
                            <Field type="text" name="name"></Field>
                            <ErrorMessage name='name' component='p' className='error-message'></ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="email">Correo Electronico:</label>
                            <Field type="email" name="email"></Field>
                            <ErrorMessage name='email' component='p'></ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="message">Mensaje:</label>
                            <Field component="textarea" value={values.message} name="message"></Field>
                        </div>
                        <button type='submit' disabled={ isSubmitting }>
                            {isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje'}
                        </button>

                    </Form>
                )
            }
        </Formik>
    )
}

export default AppForm;