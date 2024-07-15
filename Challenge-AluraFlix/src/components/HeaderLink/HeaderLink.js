import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"


const StyledLink = styled(Link)`
    font-size: 18px;
    font-weight:800 ;
    padding: 0.5em;
    color: var(--blanco);
    background-color: transparent;
    border: 3px solid var(--azul);
    border-radius: 15px;
    margin: 0 5px 0 5px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center; 
    gap: 0.3rem;
    transition: background-color 0.3s;
    &:hover{
        background-color: var(--azulClaro);
        color: var(--blanco);
    }
    img{
        height: 30px;
        width: 30px;
    }
    ${({ currentPage, url }) => currentPage === url ? `&.active {
        box-shadow: inset 0 0 15px rgba(34, 113, 209, 0.8);
        color: var(--azul);
    }` : ''}
    @media (max-width: 425px) {
        border-radius:20px;
        ${({ currentPage, url }) => currentPage === url ? `&.active {
        span{
            display:none}
        
    }` : `
        span{
        display:inline}
    `}        
  }
    
`

function HeaderLink({ url, children, img }) {
    const location = useLocation();
    const currentPage = `.${location.pathname}`;
    /* Agregando un useEffect que cambia la imagen dependiendo de la url activa */
    const [image, setImage] = useState(img);
    useEffect(() => {
        setImage(currentPage === url ? img : `${img}-inactive`);
    }, [currentPage, url, img]);

    return (
        <StyledLink className={currentPage === url ? 'active' : ''} to={url}>
            {img && <img src={require(`./${image}.png`)} />}
            <span>{children}</span>
        </StyledLink>

    )
}


export default HeaderLink