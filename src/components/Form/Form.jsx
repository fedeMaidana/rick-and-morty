import React from "react";
import { useState } from "react";
import validateForm from "./validations";
import formStyle from './form.module.css'
import imgLogin from '../../assets/img/login.jpg'

const Form = ({onLogin}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event?.preventDefault()

        const validationErrors = validateForm(userData)

        setErrors(validationErrors)

        if(Object.keys(validationErrors).length === 0) onLogin(userData)
    }


    const handleChange = (event) => {
        const {name, value} = event.target

        setUserData({...userData, [name]: value})
    }

    return(
        <>
            <div className={formStyle.presentationContainer}>
                <div className={formStyle.presentation}>
                    <img src={imgLogin} />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Correo</label>
                        <input type="email" name="email" id="email" value={userData?.email} onChange={handleChange}/>

                        {errors?.email && <span className="error">{errors?.email}</span>}

                        <label className={formStyle.password} htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" value={userData?.password} onChange={handleChange}/>

                        {errors?.password && <span className="error">{errors?.password}</span>}

                        <button>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form