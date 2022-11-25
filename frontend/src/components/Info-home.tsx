import { ContainerCard,CardInfoHome, Logo, Text, Button, ImgBackground, ContainerHomeInfo } from "../styled-components/styled.infoHome"
import logo from "../assets/img/logo.png"
import imgBackground from "../assets/img/imgHomeInfo.png"



const InfoHome = (): any => {
  return (
    <ContainerHomeInfo  >
    <ContainerCard >
      <CardInfoHome >
        <Logo src={logo} alt="logo-inmobiliaria" />
        <Text> Inmuebles extraordinarios dirigidos y supervisados por Corredores Públicos matriculados, especializados en la compra y venta de propiedades premium </Text>
        <Button> Ver propiedades </Button>
      </CardInfoHome>
      <ImgBackground src={imgBackground} alt="imgBackground" />
    </ContainerCard> 
    </ContainerHomeInfo>
  )
}

export default InfoHome 