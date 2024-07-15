import styled from "styled-components";
import iconDelete from "./delete.png"
import iconEdit from "./edit.png"
import hexToRgba from "hex-to-rgba";
import ModalEdit from "./ModalEdit";
import { useState } from "react";
import Campo from "components/Formulario/Campo";
import Titulo from "components/Titulo";

const StyledDiv = styled.div`
  margin-top: 0.5em;
  width: 282px;
  display: flex;
  flex-direction: column;
  border: 4px solid ${props => props.color};
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`;

const InnerShadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 20px;
  box-shadow: 
  0 0 20px ${props => props.color} inset,
  0 0 25px ${props => props.color} inset;
  pointer-events: none;
  z-index: 2;
`;
const EditarBorrar = styled.div`
  padding: 3px 0 3px 0;
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  border-radius: 0 0 17px 17px;
  z-index: 3;
  box-shadow: 
    0 0 20px ${props => props.color} inset,
    0 0 25px ${props => props.color} inset;
`;
const Capa = styled.img`
  display: block;
  border-bottom: 4px solid ${props => props.color};
  border-radius: 17px 17px 0 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 1;
  `;
const FormEditar = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  text-align: center;
`
const StyledBotones = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    button{
    width: 180px;
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

function Card({ imagen, id, categoria, titulo, link, descripcion, color, borrarTarjeta, editarTarjeta, seleccionar }) {
  const colorShadow = color ? hexToRgba(color, 0.3) : null;
  const [tituloEdit, setTituloEdit] = useState(titulo);
  const [categoriaEdit, setCategoriaEdit] = useState(categoria);
  const [imagenEdit, setImagenEdit] = useState(imagen);
  const [linkEdit, setLinkEdit] = useState(link);
  const [descripcionEdit, setDescripcionEdit] = useState(descripcion);
  const [editar, setEditar] = useState(false);


  const EliminarTarjeta = async () => {
    try {
      await borrarTarjeta(id);
    } catch (error) {
      console.error('No se pudo borrar', error)
    }
  };

  const AbrirEditar = () => {
    setEditar(true);
  };
  const CerrarEditar = () => {
    setEditar(false);
  };
  const TarjetaEditada = (e) => {
    e.preventDefault();
    editarTarjeta({ tituloEdit, categoriaEdit, imagenEdit, linkEdit, descripcionEdit });
    CerrarEditar()
  }

  return (
    <>
      <StyledDiv color={color}>
        <Capa color={color} src={imagen} alt={id} onClick={() => seleccionar({ imagen, id, categoria, titulo, link, descripcion, color })} />
        <InnerShadow color={colorShadow} />
        <EditarBorrar color={colorShadow}>
          <img src={iconDelete} alt="Borrar" onClick={EliminarTarjeta} />
          <img src={iconEdit} alt="Editar" onClick={AbrirEditar} />
        </EditarBorrar>
      </StyledDiv>

      {
        editar && (
          <ModalEdit>
            <FormEditar onSubmit={TarjetaEditada}>
              <Titulo>EDITAR TAERJETA:</Titulo>
              <Campo name="Titulo" placeholder="Ingrese el titulo" value={tituloEdit} actualizarValor={setTituloEdit} />
              <Campo name="Categoria" placeholder="Ingrese la categoria" value={categoriaEdit} actualizarValor={setCategoriaEdit} />
              <Campo name="Imagen" placeholder="Ingrese la imagen" value={imagenEdit} actualizarValor={setImagenEdit} />
              <Campo name="Link" placeholder="Ingrese el link" value={linkEdit} actualizarValor={setLinkEdit} />
              <Campo name="Descripcion" placeholder="Ingrese la descripcion" value={descripcionEdit} actualizarValor={setDescripcionEdit} />
              <StyledBotones>
                <button type="submit">Guardar</button>
                <button type="button" onClick={CerrarEditar}>Cancelar</button>
              </StyledBotones>
            </FormEditar>
          </ModalEdit>
        )
      }
    </>
  );
}
export default Card;
