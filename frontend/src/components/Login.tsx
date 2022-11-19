import { useState } from "react"
import { useForm } from "react-hook-form"
import logo from "../assets/img/logo.png"
import "../styled-components/login-card.css"

interface loginForm{
  email: string
  password: string
}
const LoginForm = (): any => {

  const {handleSubmit, register, reset, formState: {errors}} = useForm<loginForm>()
  const [isVisibility, setIsVisibily] =  useState(false)
  const viewPassword = (): any =>{
    setIsVisibily(!isVisibility)
  }

  const onSubmit = (data: loginForm ): any => {
    console.log(data)
    reset(
      {
        email: "",
        password: "",
      }
    )

  }

  return (
    <div className="container-card" >
      <div className="login-card" >
        <button type="button" className="close" >
          <span className="material-symbols-outlined">close</span>
        </button>
        <img className="logo" src={logo} alt="logo-inmobiliaria" />
        <h1 className="title-login" > Iniciar sesion </h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
          <div className="container-input">
            <label htmlFor="emailInput">Correo</label>
            <input
              type="text"
              id="emailInput"
              placeholder="Example@gmail.com"
              {...register("email", {required: true})} />
              {errors.email?.type === "required" && <p className="errorInput" >Inserte el correo</p> }
          </div>
          <div className="container-input" >
            <label htmlFor="passwordInput">Contraseña</label>
            <button type="button" onClick={ viewPassword} className="button-visibility" >
            <span className="material-symbols-outlined">{isVisibility ? "visibility" : "visibility_off"}</span>
            </button>
            <input
              type={isVisibility ? "text" : "password"}
              id="passwordInput"
              placeholder="**********"
              {...register("password", {required: true})} />
              {errors.password?.type === "required" && <p className="errorInput" >Inserte la contraseña</p> }
          </div>
          <button className="button-login" type="submit" > Iniciar sesion </button>
        </form>
        <p className="not-account" >¿No tienes cuenta? <span className="register_click" >Registrate</span> </p>
      </div>
    </div>
  )
}

export default LoginForm;