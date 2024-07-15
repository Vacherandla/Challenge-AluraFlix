import { Link } from "react-router-dom";
import styled from "styled-components";

const Capa = styled.div`
  width: 100%;
  height: 420px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media(max-width:425px){
    display: none;
  }
  z-index: 1;
  position: relative;
`
const Gradiente = styled.div`
  background: ${props => `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), ${props.background}`};
  height: 100%;
  width: 100%;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  z-index:1;
  
`
const Contenido = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: var(--blanco);
  z-index: 3;
  width: 100%;
  gap: 1rem;
`
const StyledText = styled.div`
  flex: 3;
  h1{
    font-size: 40px;
  }
  p{
    font-size: 15px;
  }
`
const ImageContainer = styled.div`
  flex:2;
  display: flex;
  justify-content: center;
`
const SelectedImage = styled.img`
  width: 90%; 
  height: auto;
  border-radius: 20px;
  box-shadow: inset 0 0 10px var(--azul), 0 0 10px var(--azul);
`


function Banner({ img, color, seleccion }) {
  return (
    <Capa
      style={{ backgroundImage: `url("/img/banner-${img}.png")` }}>
        <Gradiente background={color}/>
      {seleccion ? (
        <Contenido>
          <StyledText>
            <h1>{seleccion.categoria}</h1>
            <p>{seleccion.descripcion}</p>
          </StyledText>
          <ImageContainer>
          <Link to={`/${seleccion.id}`}>
            <SelectedImage src={seleccion.imagen} alt={seleccion.id}/>
          </Link>
          </ImageContainer>
        </Contenido>
      ) : (
        <Gradiente background={color} />
      )}
    </Capa>
  );
}

export default Banner;
