import { useState } from "react"
import { useForm } from "react-hook-form"
import logo from "../../assets/img/logo.png"
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

  return (
    <ContainerCard className="container-card" >
      <Card className="login-card" >
        <Close type="button" className="close" >
          <MaterialSymbolsoutlined className="material-symbols-outlined">close</MaterialSymbolsoutlined>
        </Close>
        <ImgLogo className="logo" src={logo} alt="logo-inmobiliaria" />
        <TitleLogin className="title-login" > Iniciar sesion </TitleLogin>
        <Form className="form" onSubmit={ handleSubmit(onSubmit)} >
          <Containerinput className="container-input">
            <LabelInput htmlFor="emailInput">Correo</LabelInput>
            <InputForm
              type="text"
              id="emailInput"
              placeholder="Example@gmail.com"
              {...register("email", {required: true})} />
              {errors.email?.type === "required" && <ErrorInput className="errorInput" >Inserte el correo</ErrorInput> }
          </Containerinput>
          <Containerinput className="container-input" >
            <LabelInput htmlFor="passwordInput">Contraseña</LabelInput>
            <ViewButton type="button" onClick={ viewPassword} className="button-visibility" >
            <MaterialSymbolsoutlined className="material-symbols-outlined">{isVisibility ? "visibility" : "visibility_off"}</MaterialSymbolsoutlined>
            </ViewButton>
            <InputForm
              type={isVisibility ? "text" : "password"}
              id="passwordInput"
              placeholder="**********"
              {...register("password", {required: true})} />
              {errors.password?.type === "required" && <ErrorInput className="errorInput" >Inserte la contraseña</ErrorInput> }
          </Containerinput>
          <ButtonLogin className="button-login" type="submit" > Iniciar sesion </ButtonLogin>
        </Form>
        <CambioRegister className="not-account" >¿No tienes cuenta? <SpanCambio className="register_click" >Registrate</SpanCambio> </CambioRegister>
      </Card>
    </ContainerCard>
  )
}

export default LoginForm;