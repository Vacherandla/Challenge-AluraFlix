import { Link } from "react-router-dom"
import logo from "./Logo.png"
import HeaderLink from "../HeaderLink/HeaderLink"
import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1em 10em;
    @media (max-width: 1024px) {
    padding: 1.1em 1em;
  }
    background-color: var(--negro);
    border-bottom: 3px var(--azul) solid;
    box-shadow: 0 6px 20px rgba(34,113,209,0.8);
    width: 100%;
    overflow: hidden;
    z-index: 2;
    position: relative;
    a{
        text-decoration: none;
    }
    img{
        align-self: start;
    }
`
const StyledLogoContainer = styled.section`
    height: 40px;
    display: flex;
    align-items: center;
    @media(max-width: 425px){
        display: none;
    }
`
const StyledNav = styled.nav`
    display: flex;
`


function Header(){    
    return(
        <StyledHeader >
            <Link to="/">
                <StyledLogoContainer>
                    <img src={logo} alt="Logo Alura"/>
                </StyledLogoContainer>
            </Link>

            <StyledNav>
                <HeaderLink url="./" img="home">
                    Home
                </HeaderLink>
                <HeaderLink url="./add" img="add">
                   Agregar
                </HeaderLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header