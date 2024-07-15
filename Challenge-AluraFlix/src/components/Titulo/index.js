import styled from "styled-components"

const StyledDiv = styled.div`
    font-size: 1.175rem;
    text-align: center;
    font-weight: 500;
    color: var(--azul);
`
function Titulo ({children}){
    return(
        <StyledDiv>

            {children}
        </StyledDiv>
    )
}

export default Titulo