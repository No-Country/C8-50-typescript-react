import { ButtonComent, InputcreateComent } from "../../styled-components/styled.createcomen";

function CreateComent(): any{
    return <>
    {<InputcreateComent type={"text"} placeholder="Coment"/>}
    {<ButtonComent>Crear Comentario</ButtonComent>}
    </>
}

export default CreateComent;