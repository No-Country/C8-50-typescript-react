import { useNavigate, useParams } from "react-router-dom"
import { Text } from "../styled-components/styled.infoHome"

import {
  TextNavbar,
  SpanNavbar,
  NavbarRouter,
  MaterialSymbolsoutlined,
  NamePropiedad,
  Main,
  DivIcons,
  DivTitle,
  Propertydata,
  VerifiedProperty,
  TitleData,
  BasicInformation,
  TypePropetary,
  IDPropetary,
  Number,
  Container,
  DivCotainer,
  TitleTex,
  PropiedadInfo,
  Div,
  Hr,
  DivDirection
} from "../styled-components/styled.pages/styled.propiedadesDetail"
const PropiedadDetail = (): any => {
  const Navigate = useNavigate()

  const { id } = useParams<string>()

  return (
    <>
      <NavbarRouter  >
        <TextNavbar onClick={() => Navigate("/")} >Home</TextNavbar> /
        <TextNavbar onClick={() => Navigate("/propiedades")} >Propiedades</TextNavbar> /
        <SpanNavbar> Casa en venta en Quesada 5500, Villa Urquiza, Capital Federal {id}  {/* esto es interactivo */} </SpanNavbar>
      </NavbarRouter>
      <Main>
        <NamePropiedad>
          <MaterialSymbolsoutlined className="material-symbols-outlined">home</MaterialSymbolsoutlined>
          Casa en venta en Quesada 5500, Villa Urquiza, Capital Federal {id}  {/* esto es interactivo */}
        </NamePropiedad>
        <section className="Container imgs" >

        </section>
        <section>
          <Propertydata>
            <DivTitle>
              <VerifiedProperty>Propiedad verificada</VerifiedProperty>
              <TitleData>Datos generales</TitleData>
              <DivIcons>
                <span className="material-symbols-outlined">
                  share
                </span>
                <span style={{ color: "red" }} className="material-symbols-outlined">
                  favorite
                </span>
                <span style={{ color: "#efb810" }} className="material-symbols-outlined">
                  report
                </span>
              </DivIcons>
            </DivTitle>
            <Hr />
            <BasicInformation>
              <TypePropetary> Tipo de propiedad: <span style={{ fontWeight: "bold" }} > Casa {/* esto es dinamico */} </span> </TypePropetary>
              <IDPropetary> Codigo de propeidad: <span style={{ fontWeight: "bold" }} >212445 {/* esto es dinamico */} </span>  </IDPropetary>
            </BasicInformation>
            <Hr />
            <DivDirection>
              <DivCotainer>
                <TitleTex> La propiedad cuenta con:</TitleTex>
                <Container>
                  <span className="material-symbols-outlined">
                    bathtub
                  </span>
                  <Number>2</Number>
                  <Text>baños</Text>
                </Container>
                <Container>
                  <span className="material-symbols-outlined">
                    bed
                  </span>
                  <Number>6</Number>
                  <Text>Habit.</Text>
                </Container>
                <Container>
                  <span className="material-symbols-outlined">
                    square_foot
                  </span>
                  <Number>344m²</Number>
                  <Text>Totales</Text>
                </Container>
              </DivCotainer>
              <Div>
                <PropiedadInfo> Direccion: <span style={{ fontWeight: "normal" }} >CRA 63 N° 34 - 40 {/* dinamico */} </span> </PropiedadInfo>
                <PropiedadInfo> Pisos:  <span style={{ fontWeight: "normal" }} >2 {/* dinamico */} </span> </PropiedadInfo>
              </Div>
            </DivDirection>
            <Hr />
            <p> Valor de propiedad: <span style={{ fontWeight: "bold" }} > 249.999$ {/* dinamico */} </span>  </p>
            <Hr />
            <Div>
              <Number> Descripcion: </Number>
              <Text> Cuenta con 116 metros distribuidos en sala y comedor, balcón, cocina integral, zona de ropas, 2 baños, 3 alcobas, 3 closet, piso en cerámica, parqueadero, cuarto útil, gabinetes, red de gas. Fácil acceso,
                buenas rutas de transporte. </Text>
            </Div>
          </Propertydata>
          
        </section>

      </Main>
    </>
  )
}

export default PropiedadDetail