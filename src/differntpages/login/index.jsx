import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from "yup"
export default function Login() {
    let initalvalues = {
        email: '',
        password: ''
    }
    let handelsubmit = ((values) => {
        console.log(values)
    })
    let formschema = Yup.object().shape({
        email: Yup.string("Email is not valid").required("email is required"),
        password: Yup.string("password is not valid").required("password is required")
    })
    return (

        <div>
            <h2>this is login page</h2>
            <Formik initialValues={initalvalues} onSubmit={handelsubmit} validationSchema={formschema}>
                {(props) => (
                    <Form>
                        <label htmlFor='email'>Email</label>
                        <Field name="email" type="text"></Field>
                        {props.errors.email}<br></br>
                        <label htmlFor='password'>password</label>
                        <Field type="password" name="password"></Field>
                        {props.errors.password}<br></br>

                        <button type='submit' >submit</button>
                    </Form>

                )}



            </Formik> 
               </div>
    )
}
