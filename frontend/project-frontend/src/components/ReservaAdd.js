import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { getBarId, getUsuarioId, nuevaReserva } from '../Api/Api';
import { useNavigate } from 'react-router-dom';
import './Registro.css';//Mismo formato de formulario

const ReservaAdd = () => {
    const navigate = useNavigate();
    /*const [userId, setUserId] = useState(null);
    const [barId, setBarId] = useState(null);

    useEffect(() => {
        const fetchIds = async () => {
            const user = await getUsuarioId();
            const bar = parseInt(getBarId());
            setUserId(user);
            setBarId(bar);
        }

        fetchIds();
        console.log(userId);
        console.log(barId);
    }, [])*/

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({
        fecha: "",
        hora: "",
        comensales: "",
        usuario_id: "",
        bar_id: ""
    });

    const validate = (data) => {
        let errors = {};

        if (!data.fecha) {
            errors.fecha = 'Fecha es obligatoria';
        } else if (!/^\d{2}-\d{2}-\d{4}$/.test(data.fecha)) {
            errors.fecha = 'Formato de fecha no válido. Utiliza el formato DD-MM-YYYY';
        }
        
        if (!data.hora) {
            errors.fecha = 'Hora es obligatoria';
        } else if (!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(data.hora)) {
            errors.hora = 'Formato de hora no válido. Utiliza el formato HH:mm';
        }

        if (!data.comensales) {
            errors.comensales = 'Comensales es obligatorio';
        }

        return errors;
    };

    const onSubmit = (data, form) => {
        console.log(data);
        setFormData(data);
        setShowMessage(true);
        nuevaReserva(data);
        navigate("/reservas");
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
                    <h5>Reserva existosa!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Tu reserva con fecha: <b>{formData.fecha}</b> ha sido creada correctamente.
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Nueva reserva</h5>
                    <Form onSubmit={onSubmit} initialValues={{ fecha: '', hora: '', usuario_id: '', bar_id: '', comensales: '' }} validate={validate} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">
                            <Field name="fecha" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="fecha" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="fecha" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Fecha*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="hora" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="hora" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="hora" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Hora*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="comensales" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-user" />
                                        <InputText id="comensales" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="comensales" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Comensales*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="usuario_id" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="usuario_id" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="usuario_id" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Usuario*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="bar_id" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <InputText id="bar_id" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="bar_id" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Bar*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Button type="submit" label='Reservar' className="mt-2" />
                            <br></br>
                            <br></br>
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}

export default ReservaAdd;
