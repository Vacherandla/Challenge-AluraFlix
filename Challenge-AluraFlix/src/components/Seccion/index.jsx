import Card from "components/Card";
import styled from "styled-components";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: space-around;
`
const StyledDiv = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-around;
    margin-bottom: 1rem;
    align-items: center;
`
const Titulo = styled.div`
    display: flex;
    color: var(--blanco);
    background-color: ${props => props.color};
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    margin: 1rem;
    border-radius: 10px;
    border: 3px solid ${props => props.color};
    width: 17rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center;

`

const Seccion = ({ videos, color, categoria, borrarTarjeta,editarTarjeta,seleccionar }) => {
    const videosFiltrados = videos.filter(video => video.categoria === categoria);
    return (
      <StyledSection>
        <Titulo color={color}>{categoria}</Titulo>
            <StyledDiv>
            {videosFiltrados.map((video) => (
          <Card {...video} key={video.id} color={color} borrarTarjeta={borrarTarjeta} editarTarjeta={editarTarjeta} seleccionar={seleccionar}/>
        ))}
            </StyledDiv>
        
      </StyledSection>
    );
  };
  
  export default Seccion;

