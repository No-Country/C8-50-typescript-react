import styled from "styled-components";


 
export const ContainerCard  = styled.div`
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


export const Card = styled.div`
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

export const TitleRegistro = styled.h1`
  text-align: center;
  color: #45484a;
  font-size: 1.9rem;`

export const LabelInput = styled.label`
font-size: .9rem`

export const Close = styled.button`
position: absolute;
top: 13px;
right: 17px;
background: transparent;
border: none;`

export const ImgLogo = styled.img`
width: 96px;
margin: 0 auto;`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.5rem;`

export const Containerinput = styled.div`
width: 90%;
position: relative;
display: flex;
flex-direction: column;
`

export const InputForm = styled.input`
height: 35px;
line-height: 30px;
border-radius: 7px;
border: none;
padding-left: 10px;
`

export const CambioLogin = styled.p`
text-align: center;
font-size: .9rem;`

export const SpanCambio = styled.span`
color: #3d4cd7;
font-weight: bold;
&:hover{
	border-bottom: 1px solid #3d4cd7;
}
`

export const ErrorInput = styled.p`
font-size: .8rem;
color: red;
`

export const ButtonRegister = styled.button`
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
export const ViewButton = styled.button`
position: absolute;
right: 10px;
top: 22px;
border: none;
background: transparent;`

export const MaterialSymbolsoutlined = styled.span`
font-variation-settings:
'FILL' 0,
'wght' 400,
'GRAD' 0,
'opsz' 48;
`
