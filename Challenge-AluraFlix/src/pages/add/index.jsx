import Formulario from "components/Formulario"
import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: var(--gris);
    padding: 3rem;
    @media(max-width: 425px){
        padding:0.3rem;
    }
    h1{
        font-size: 40px;
    }
    h3{
        font-size: 15px;
    }
`
const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
`

const Agregar = ({ crearTarjeta }) => {
    return (<StyledDiv>
        <Titulo>
        <h1>NUEVO VIDEO</h1>
        <h3>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>
        </Titulo>
        <Formulario crearTarjeta={crearTarjeta} />
    </StyledDiv>

    )
}
export default Agregar