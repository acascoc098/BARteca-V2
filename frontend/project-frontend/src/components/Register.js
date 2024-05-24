import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { registerUser } from '../Api/Api';
import './Registro.css';

const Register = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        username: "",
        password: "",
        correo: "",
        telefono: ""
    });

    const validate = (data) => {
        let errors = {};

        if (!data.nombre) {
            errors.nombre = 'Nombre es obligatorio';
        }

        if (!data.correo) {
            errors.correo = 'Correo es obligatorio';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.correo)) {
            errors.correo = 'Dirección de correo no válida. E.g. example@email.com';
        }

        if (!data.password) {
            errors.password = 'Password es obligatorio';
        }

        if (!data.username) {
            errors.username = 'Usuario es obligatorio';
        }

        if (!data.telefono) {
            errors.telefono = 'Telefono es obligatorio';
        } else if (!/[0-9]{9}$/i.test(data.telefono)) {
            errors.telefono = 'El número de teléfono debe tener 9 dígitos';
        }

        return errors;
    };

    const onSubmit = (data, form) => {
        console.log(data);
        setFormData(data);
        setShowMessage(true);
        registerUser(data);
        form.restart();
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registro existoso!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Tu cuenta con user: <b>{formData.username}</b> ha sido creada correctamente.
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Register</h5>
                    <Form onSubmit={onSubmit} initialValues={{ nombre: '', correo: '', password: '', username: '', telefono: '' }} validate={validate} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">
                            <Field name="nombre" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="nombre" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="nombre" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Nombre*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="username" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="username" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="username" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Usuario*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="correo" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-envelope" />
                                        <InputText id="correo" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="correo" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Correo*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="password" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" {...input} feedback={false} tabIndex={1} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} toggleMask />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Password*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="telefono" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-envelope" />
                                        <InputText id="telefono" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="telefono" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Telefono*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Button type="submit" className="mt-2" />
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}

export default Register;
