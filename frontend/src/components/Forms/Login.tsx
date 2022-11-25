import { useState } from "react"
import { useForm } from "react-hook-form"
import logo from "../../assets/img/logo.png"
import { useNavigate } from "react-router-dom"
import {
  ContainerCard,
  Card,
  TitleLogin,
  LabelInput,
  Close,
  ImgLogo,
  Form,
  Containerinput,
  InputForm,
  CambioRegister,
  SpanCambio,
  ErrorInput,
  ButtonLogin,
  ViewButton,
  MaterialSymbolsoutlined
} from "../../styled-components/styles.forms/styled.login"

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


  const Navigate = useNavigate()




  return (
    <ContainerCard  >
      <Card  >
        <Close onClick={() => Navigate("/")} type="button"  >
          <MaterialSymbolsoutlined className="material-symbols-outlined">close</MaterialSymbolsoutlined>
        </Close>
        <ImgLogo  src={logo} alt="logo-inmobiliaria" />
        <TitleLogin  > Iniciar sesion </TitleLogin>
        <Form  onSubmit={ handleSubmit(onSubmit)} >
          <Containerinput >
            <LabelInput htmlFor="emailInput">Correo</LabelInput>
            <InputForm
              type="text"
              id="emailInput"
              placeholder="Example@gmail.com"
              {...register("email", {required: true})} />
              {errors.email?.type === "required" && <ErrorInput  >Inserte el correo</ErrorInput> }
          </Containerinput>
          <Containerinput  >
            <LabelInput htmlFor="passwordInput">Contraseña</LabelInput>
            <ViewButton type="button" onClick={ viewPassword}  >
            <MaterialSymbolsoutlined className="material-symbols-outlined">{isVisibility ? "visibility" : "visibility_off"}</MaterialSymbolsoutlined>
            </ViewButton>
            <InputForm
              type={isVisibility ? "text" : "password"}
              id="passwordInput"
              placeholder="**********"
              {...register("password", {required: true})} />
              {errors.password?.type === "required" && <ErrorInput  >Inserte la contraseña</ErrorInput> }
          </Containerinput>
          <ButtonLogin  type="submit" > Iniciar sesion </ButtonLogin>
        </Form>
        <CambioRegister  >¿No tienes cuenta? <SpanCambio onClick={() => Navigate("/sign-up") }  >Registrate</SpanCambio> </CambioRegister>
      </Card>
    </ContainerCard>
  )
}

export default LoginForm;