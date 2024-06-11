import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { nuevoBar } from '../Api/Api';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

const BarAdd = () => {
    const navigate = useNavigate();

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({
        calificacion: 3,
        nombre: "",
        direccion: "",
        ciudad: "",
        imagen: "",
        correo: "",
        telefono: "",
        provincia: ""
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

        if (!data.imagen) {
            errors.imagen = 'URL de la imagen es obligatoria';
        } else if (!/^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/.*)?$/i.test(data.imagen)) {
            errors.iamegn = 'Dirección URL no válida.';
        }

        if (!data.direccion) {
            errors.direccion = 'Dirección es obligatorio';
        }

        if (!data.ciudad) {
            errors.ciudad = 'Ciudad es obligatorio';
        }
        
        if (!data.provincia) {
            errors.provincia = 'Provincia es obligatorio';
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
        nuevoBar(data);
        navigate("/bares");
        form.restart();
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button className="p-button-text" label='OK' autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registro de bar existoso!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        El bar: <b>{formData.nombre}</b> ha sido creado correctamente.
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Nuevo bar</h5>
                    <Form onSubmit={onSubmit} initialValues={{ nombre: '', direccion: '', provincia: '', ciudad: '', correo: '', telefono: '', imagen: '', calificacion: '3' }} validate={validate} render={({ handleSubmit }) => (
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

                            <Field name="direccion" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="direccion" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="direccion" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Dirección*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            
                            <Field name="ciudad" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="ciudad" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="ciudad" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Ciudad*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            
                            <Field name="provincia" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="provincia" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="provincia" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Provincia*</label>
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

                            <Field name="imagen" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="imagen" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="imagen" className={classNames({ 'p-error': isFormFieldValid(meta) })}>URL imagen*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="calificacion" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <InputText id="calificacion" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="calificacion" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Calificación*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="telefono" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-phone" />
                                        <InputText id="telefono" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="telefono" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Telefono*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Button type="submit" label='Añadir bar' className="mt-2" />
                            <br></br>
                            <br></br>
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}

export default BarAdd;
