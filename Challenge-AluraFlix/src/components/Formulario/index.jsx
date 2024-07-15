import { useState } from "react";
import Campo from "./Campo"
import styled from "styled-components";

const StyledFormulario = styled.section`
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 100%;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4rem;
`

const StyledBotones = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    button{
    width: 180px;
    max-width: 100%;
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
    justify-content: center;
    align-items: center; 
    gap: 0.3rem;
    transition: background-color 0.3s;
    &:hover&&:active{
        color: var(--blanco);
        box-shadow: inset 0 0 15px rgba(34, 113, 209, 0.8);
        color: var(--azul);;
    }}  
`
const Formulario = (props) => {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [link, setLink] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const { crearTarjeta } = props;
    const [validForm, setValidForm] = useState(true);

    const NuevaTarjeta = (e) => {
        e.preventDefault();
        if (titulo === "" || categoria === "" || imagen === "" || link === "" || descripcion === "") {
            setValidForm(false);
            return;
        } else setValidForm(true);
        crearTarjeta({ titulo, categoria, imagen, link, descripcion });
        limpiarFormulario()
    }
    const limpiarFormulario = () => {
        setTitulo(""); setCategoria(""); setImagen(""); setLink(""); setDescripcion("");
        setValidForm(true);
    }



    return (
        <StyledFormulario>
            {!validForm ? <p style={{ color: "red", fontSize: "2rem" }}>Todos los campos son obligatorios</p> : <></>}
            <h2>CREAR TARJETA</h2>
            <StyledForm>
                <Campo name="Titulo" placeholder="Ingrese el titulo" value={titulo} actualizarValor={setTitulo} />
                <Campo name="Categoria" placeholder="Ingrese la categoria" value={categoria} actualizarValor={setCategoria} />
                <Campo name="Imagen" placeholder="Ingrese la imagen" value={imagen} actualizarValor={setImagen} />
                <Campo name="Link" placeholder="Ingrese el link" value={link} actualizarValor={setLink} />
                <Campo name="Descripcion" placeholder="Ingrese la descripción" value={descripcion} actualizarValor={setDescripcion} />
            </StyledForm>
            <StyledBotones>
                <button onClick={NuevaTarjeta}>CREAR</button>
                <button onClick={limpiarFormulario}>LIMPIAR</button>
            </StyledBotones>
        </StyledFormulario>

    )
}

export default Formulario