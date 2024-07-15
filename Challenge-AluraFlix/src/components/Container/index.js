import styled from "styled-components";

const StyledContainer = styled.section`
  flex-direction: column;
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.5em;
`

function Container({ children }) {
  return <StyledContainer >{children}</StyledContainer>;
}

export default Container;
