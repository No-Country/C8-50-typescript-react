import { SubmitHandler, useForm } from "react-hook-form"
import logo from "../../assets/img/logo.png"
import { useState } from "react"
import {
  ContainerCard,
  Card,
  TitleRegistro,
  LabelInput,
  Close,
  ImgLogo,
  Form,
  Containerinput,
  InputForm,
  CambioLogin,
  SpanCambio,
  ErrorInput,
  ButtonRegister,
  ViewButton,
  MaterialSymbolsoutlined
} from "../../styled-components/styles.forms/styled.register"



interface userForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}



const RegisterForm = (): any => {



  const [isVisiblePassword, setIsvisiblePassword] = useState(false)
  const viewPassword = (): void => {
    setIsvisiblePassword(!isVisiblePassword)
  }



  const { handleSubmit, register, formState: { errors }, reset, getValues } = useForm<userForm>()



  const Submit: SubmitHandler<userForm> = (data: userForm) => {
    console.log(data);
    reset({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
  }


  return (
    <ContainerCard >
      <Card  >
        <Close  >
          <MaterialSymbolsoutlined className="material-symbols-outlined">close</MaterialSymbolsoutlined>
        </Close>
        <ImgLogo src={logo} alt="logo-inmobiliaria" />
        <TitleRegistro  > Registro </TitleRegistro>
        <Form onSubmit={handleSubmit(Submit)}  >
          <Containerinput  >
            <LabelInput htmlFor="nombreInput">Nombre</LabelInput>
            <InputForm {...register("name", {
              required: true
            })}
              type="text"
              id="nombreInput"
              placeholder="Nombre completo" />
            {errors.name?.type === "required" && <ErrorInput  > Necesitas insertar tu nombre </ErrorInput>}
          </Containerinput>
          <Containerinput  >
            <LabelInput htmlFor="emailInput">Correo</LabelInput>
            <InputForm {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} type="text" id="emailInput" placeholder="Example@gmail.com" />
            {errors.email?.type === "required" && <ErrorInput  > Necesitas insertar tu correo </ErrorInput>}
            {errors.email?.type === "pattern" && <ErrorInput  > Escribir bien el correo </ErrorInput>}
          </Containerinput>
          <Containerinput  >
            <LabelInput htmlFor="passwordInput">Contrase??a</LabelInput>
            <ViewButton type="button" onClick={viewPassword} >
              <MaterialSymbolsoutlined className="material-symbols-outlined">
                {isVisiblePassword ? "visibility" : "visibility_off"}
              </MaterialSymbolsoutlined>
            </ViewButton>
            <InputForm {...register("password", { required: true })} type={isVisiblePassword ? "text" : "password"} id="passwordInput" placeholder="***********" />
            {errors.password?.type === "required" && <ErrorInput  > Necesitas insertar tu contrase??a </ErrorInput>}
          </Containerinput>
          <Containerinput  >
            <LabelInput htmlFor="ConfirmpasswordInput">Confirmar contrase??a</LabelInput>
            <InputForm {...register("confirmPassword", { required: true, validate: value => value === getValues("password") })} type={isVisiblePassword ? "text" : "password"} id="ConfirmpasswordInput" placeholder="***********" />
            {errors.confirmPassword?.type === "required" && <ErrorInput  > Necesitas confirmar tu contrase??a </ErrorInput>}
            {errors.confirmPassword?.type === "validate" && <ErrorInput  > La contrase??as no coinciden </ErrorInput>}
          </Containerinput>
          <ButtonRegister type="submit" > Register </ButtonRegister>
        </Form>
        <CambioLogin  > ?? Ya tienes cuenta?  <SpanCambio> iniciar sesion </SpanCambio> </CambioLogin>
      </Card>
    </ContainerCard>
  )
}