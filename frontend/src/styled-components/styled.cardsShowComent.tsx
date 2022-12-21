import styled from "styled-components";

export const ComentCardStyle = styled.div`
position: relative;
background-color: #e8e8ef;
margin-bottom: 10px;
flex; 1 0 25rem;
max-width: 30rem;
max-height: 50rem;
transition: 0.2s;
margin: 10px 10px;

&:hover{
    transform: translateY(-0.5rem);
    box-shadow: 0.5rem 0.75rem 1.5rem #bbbbbb;
}
.comentCardStyle{
    max-width: 100%;
    height: auto;
}
`

export const Content = styled.div`
margin: 10px 10px;
display: flex;
column-gap: 10px;
img {
    max-width: 12%;
}
`