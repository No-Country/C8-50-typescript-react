
import { useForm } from "react-hook-form"
import logo from "../assets/img/logo.png"
import { useState } from "react"
import styled from "styled-components"


interface user {
  name: string
  email: string
  password: string
  confirmPassword: string
}


const ContainerCard  = styled.div`
background-color: #908c8ca8;
width: 100%;
height: 100%;
position: fixed;
top: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 11;`
const Card = styled.div`
width: 330px;
	height: 550px;
	background-color: #e6e9f7;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	justify-content: space-around;
	box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.4);
	border-radius: 10px;
	position: relative;`
const TitleRegistro = styled.h1`
  text-align: center;
  color: #45484a;
  font-size: 1.9rem;`
const LabelInput = styled.label`
font-size: .9rem`
const Close = styled.button`
position: absolute;
top: 13px;
right: 17px;
background: transparent;
border: none;`
const ImgLogo = styled.img`
width: 96px;
margin: 0 auto;`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.5rem;`
const Containerinput = styled.div`
width: 90%;
position: relative;
display: flex;
flex-direction: column;
`
const InputForm = styled.input`
height: 35px;
line-height: 30px;
border-radius: 7px;
border: none;
padding-left: 10px;
`
const CambioLogin = styled.p`
text-align: center;
font-size: .9rem;`
const SpanCambio = styled.span`
color: #3d4cd7;
font-weight: bold;`
const ErrorInput = styled.p`
font-size: .8rem;
color: red;
`
const ButtonRegister = styled.button`
background-color: #3d4cd7;
width: 180px;
/* padding: 34.66px; */
height: 33.66px;
color: white;
font-size: 14px;
font-weight: bold;
border: none;
border-radius: 7px;
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);`
const ViewButton = styled.button`
position: absolute;
right: 10px;
top: 22px;
border: none;
background: transparent;`
const MaterialSymbolsoutlined = styled.span`
font-variation-settings:
'FILL' 0,
'wght' 400,
'GRAD' 0,
'opsz' 48;
`


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
    <ContainerCard className="container-card">
      <Card className="Card" >
        <Close className="Close" >
          <MaterialSymbolsoutlined className="material-symbols-outlined">close</MaterialSymbolsoutlined>
        </Close>
        <ImgLogo className="img-logo" src={logo} alt="logo-inmobiliaria" />
        <TitleRegistro className="title-registro" > Registro </TitleRegistro>
        <Form className="Form" onSubmit={() => onSubmit} >
          <Containerinput className="container-input" >
            <LabelInput htmlFor="nombreInput">Nombre</LabelInput>
            <InputForm {...register("name", {
              required: true
            })}
              type="text"
              id="nombreInput"
              placeholder="Nombre completo" />
            {errors.name?.type === "required" && <ErrorInput className="errorInput" > Necesitas insertar tu nombre </ErrorInput>}
          </Containerinput>
          <Containerinput className="container-input" >
            <LabelInput htmlFor="emailInput">Correo</LabelInput>
            <InputForm {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} type="text" id="emailInput" placeholder="Example@gmail.com" />
            {errors.email?.type === "required" && <ErrorInput className="errorInput" > Necesitas insertar tu correo </ErrorInput>}
            {errors.email?.type === "pattern" && <ErrorInput className="errorInput" > Escribir bien el correo </ErrorInput>}
          </Containerinput>
          <Containerinput className="container-input" >
            <LabelInput htmlFor="passwordInput">Contraseña</LabelInput>
            <ViewButton className="ViewButton" type="button" onClick={viewPassword} >
              <MaterialSymbolsoutlined className="material-symbols-outlined">
                {isVisiblePassword ? "visibility" : "visibility_off"}
              </MaterialSymbolsoutlined>
            </ViewButton>
            <InputForm {...register("password", { required: true })} type={isVisiblePassword ? "text" : "password"} id="passwordInput" placeholder="***********" />
            {errors.password?.type === "required" && <ErrorInput className="errorInput" > Necesitas insertar tu contraseña </ErrorInput>}
          </Containerinput>
          <Containerinput className="container-input" >
            <LabelInput htmlFor="ConfirmpasswordInput">Confirmar contraseña</LabelInput>
            <InputForm {...register("confirmPassword", { required: true })} type={isVisiblePassword ? "text" : "password"} id="ConfirmpasswordInput" placeholder="***********" />
            {errors.confirmPassword?.type === "required" && <ErrorInput className="errorInput" > Necesitas confirmar tu contraseña </ErrorInput>}
          </Containerinput>
          <ButtonRegister type="submit" > Register </ButtonRegister>
        </Form>
        <CambioLogin className="CambioLogin" > ¿ Ya tienes cuenta?  <SpanCambio> iniciar sesion </SpanCambio> </CambioLogin>
      </Card>
    </ContainerCard>
  )
}

export default RegisterForm