
import { useForm } from "react-hook-form"
import "../styled-components/register-card.css"
import logo from "../assets/img/logo.png"
import { useState } from "react"


interface user {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterForm = (): any => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm<user>()
  const onSubmit = handleSubmit((data: user) => {
    console.log(data);
    reset({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
  })

  const [isVisiblePassword, setIsvisiblePassword] = useState(false)

  const viewPassword = (): void => {
    setIsvisiblePassword(!isVisiblePassword)
  }


  return (
    <div className="container-card">
      <div className="Card" >
        <button className="Close" >
      <span className="material-symbols-outlined">
        close
      </span>
        </button>
        <img className="img-logo" src={logo} alt="logo-inmobiliaria" />
        <h1 className="title-registro" > Registro </h1>
        <form className="Form" onSubmit ={ onSubmit} >
          <div className="container-input" >
            <label htmlFor="nombreInput">Nombre</label>
            <input {...register("name", {
              required: true
            })}
              type="text"
              id="nombreInput"
              placeholder="Nombre completo" />
            {errors.name?.type === "required" && <p className="errorInput" > Necesitas insertar tu nombre </p>}
          </div>
          <div className="container-input" >
            <label htmlFor="emailInput">Correo</label>
            <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} type="text" id="emailInput" placeholder="Example@gmail.com" />
            {errors.email?.type === "required" && <p className="errorInput" > Necesitas insertar tu correo </p>}
            {errors.email?.type === "pattern" && <p className="errorInput" > Escribir bien el correo </p>}
          </div>
          <div className="container-input" >
            <label htmlFor="passwordInput">Contraseña</label>
            <button className="viewButton" type="button" onClick={viewPassword} >
              <span className="material-symbols-outlined">
                {isVisiblePassword ? "visibility" : "visibility_off"}
              </span>
            </button>
            <input {...register("password", { required: true })} type={isVisiblePassword ? "text" : "password"} id="passwordInput" placeholder="***********" />
            {errors.password?.type === "required" && <p className="errorInput" > Necesitas insertar tu contraseña </p>}
          </div>
          <div className="container-input" >
            <label htmlFor="ConfirmpasswordInput">Confirmar contraseña</label>
            <input {...register("confirmPassword", { required: true })} type={isVisiblePassword ? "text" : "password"} id="ConfirmpasswordInput" placeholder="***********" />
            {errors.confirmPassword?.type === "required" && <p className="errorInput" > Necesitas confirmar tu contraseña </p>}
          </div>
          <button type="submit" > Register </button>
        </form>
        <p className="CambioLogin" > ¿ Ya tienes cuenta?  <span> iniciar sesion </span> </p>
      </div>
    </div>
  )
}

export default RegisterForm