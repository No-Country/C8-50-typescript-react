import propiedadesImgCard from "../assets/img/PropiedadesCard.png"
import citasImgCard from "../assets/img/CitasImg.png"
import asesoresImgCard from "../assets/img/AsesoresCard.png"
import {
  ContainerCards,
  PropiedadesCard,
  CardTitle,
  CardText,
  CardButton,
  CardImg
} from "../styled-components/Styled.cardsInfo"

const CardsInfo = (): any => {
  return (
    <ContainerCards>
      <PropiedadesCard>
        <img style={{width: "275px"}} src={propiedadesImgCard} alt="Propiedades-card-img" />
        <CardTitle> Propiedades </CardTitle>
        <CardText>Variedad de propeidades de todos lo tipos, para que encuentes la de tus sueños!!</CardText>
        <CardButton > Conocer mas </CardButton>
      </PropiedadesCard>
      <PropiedadesCard className="CitasCard" >
        <CardImg src={citasImgCard} alt="Citas-card-img" />
        <CardTitle> Agendar citas </CardTitle>
        <CardText>Puedes agendar citas para ver las propieades que mas te gustes y tomar tu mejor decicion</CardText>
        <CardButton > Conocer mas </CardButton>
      </PropiedadesCard>
      <PropiedadesCard className="AsesoresCard" >
        <CardImg src={asesoresImgCard} alt="Asesores-card-img" />
        <CardTitle> Asesores </CardTitle>
        <CardText>Contamos con un gran equipo de asesores, para darte todo el  apoyo que necesites</CardText>
        <CardButton > Conocer mas </CardButton>
      </PropiedadesCard>
    </ContainerCards>
  )
}

export default CardsInfo