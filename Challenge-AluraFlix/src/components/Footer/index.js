import logo from "./Logo.png";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding-top: 1rem;
  background-color: var(--negro);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 3px var(--azul) solid;
  box-shadow: 0 6px 20px rgba(34, 113, 209, 0.8);
  z-index: 2;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  h2 {
    color: var(--azul);
    font-size: 15px;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <img src={logo} alt="Logo Alura" />
      <h2>Desarrollado por Luis Augusto Vacherand - Alura Latam 2024</h2>
    </StyledFooter>
  );
}

export default Footer;