import React, { useState } from 'react';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Seccion from 'components/Seccion';


function Inicio({ videos, borrarTarjeta, editarTarjeta }) {
  const [seleccion,setSeleccion] = useState(null);
  const seleccionar = (tarjeta)=>{
    setSeleccion(tarjeta);
  }
  return (
    <>
      <Banner img="home" color="#154580" seleccion={seleccion}/>
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos</h1>
      </Titulo>

      <Seccion videos={videos} color="#6BD1FF" categoria="Front End" borrarTarjeta={borrarTarjeta} editarTarjeta={editarTarjeta} seleccionar={seleccionar}/>
      <Seccion videos={videos} color="#00C86F" categoria="Back End" borrarTarjeta={borrarTarjeta} editarTarjeta={editarTarjeta} seleccionar={seleccionar}/>
      <Seccion videos={videos} color="#FFBA05" categoria="Innovación y Gestión" borrarTarjeta={borrarTarjeta} editarTarjeta={editarTarjeta} seleccionar={seleccionar}/>
    </>
  );
}

export default Inicio;