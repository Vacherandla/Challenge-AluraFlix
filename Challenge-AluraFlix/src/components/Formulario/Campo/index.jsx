import styled from "styled-components";

const StyledCampo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: start;
    width: 470px;    
    @media(max-width:425px){
        width: 95%;
    }
    gap: 1rem;
    margin-bottom:1rem;
    color: var(--gris);
`;
const StyledInput = styled.input`
    width: 100%;
    height:${props =>props.name === "Descripcion" ? "220px":"2rem"};
    border-radius: 10px;
    border: 2px solid var(--gris);
    padding-left: 0.5rem;
    background-color: var(--negro);
    color: var(--gris);
    &.error{
        border: 2px solid red;
        color: red;
    }
`;
const StyledCategoria = styled.select`
    width: 100%;
    height: 2rem;
    border-radius: 10px;
    border: solid 2px var(--gris);
    padding-left: 0.5rem;
    background-color: var(--negro);
    color: var(--gris);
    &.error{
        border: 2px solid red;
        color: red;
    }
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  height: 220px;
  border-radius: 10px;
  border: 2px solid var(--gris);
  padding: 0.5rem;
  resize: none;
  background-color: var(--negro);
  color: var(--gris);
  &.error {
    border: 2px solid red;
    color: red;
  }
`;
const Campo = ({name,placeholder,value,actualizarValor})=>{
    const cambio = (e)=>{
        actualizarValor (e.target.value);
    }

    return <StyledCampo>
        <label>{name}</label>
        {name === "Categoria" ? (
            <StyledCategoria value={value} onChange={cambio}>
                <option value=""></option>
                <option value="Front-End">Front-End</option>
                <option value="Back End">Back End</option>
                <option value="Innovación y Gestión">Innovación y Gestión</option>
            </StyledCategoria>
        ): 
        name === "Descripcion" ? (
            <StyledTextarea name={name} placeholder={placeholder} required value={value} onChange={cambio}/>
        ):
        (
            <StyledInput name={name} placeholder={placeholder} required value={value} onChange={cambio}/>
        )}        
    </StyledCampo>
}
export default Campo