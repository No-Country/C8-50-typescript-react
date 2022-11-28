import { useNavigate, useParams } from "react-router-dom"

import {
  TextNavbar,
  SpanNavbar,
  NavbarRouter,
  MaterialSymbolsoutlined,
  NamePropiedad,
  Main
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


      </Main>


    </>
  )
}

export default PropiedadDetail