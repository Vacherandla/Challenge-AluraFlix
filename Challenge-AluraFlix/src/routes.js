import { useState, useEffect } from "react";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import Base from "pages/Base";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agregar from "pages/add";
import { v4 as uuid } from 'uuid';



function AppRoutes() {

  const [videos, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Vacherandla/alura-flix-api/videos"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
      });
  }, []);

  /* sin usar POST (el metodo que usa POST no puede interactuar con las otras funciones porque no existe realmente porque estoy usando my json server - creo)
  const crearTarjeta = (data)=>{
      setVideo(videosAnteriores =>[...videosAnteriores,{id:uuid(),...data}])
  } */
  const crearTarjeta = (data) => {
    const videoNuevo = { id: uuid(), ...data };
    fetch(
      "https://my-json-server.typicode.com/Vacherandla/alura-flix-api/videos", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(videoNuevo)
    }
    )
    .then(response =>response.json())
    .then(videoGuardado =>{
      setVideo(videosAnteriores => [...videosAnteriores, videoGuardado]);
    })
    .catch(error=>{
      console.error("No se pudo crear la tarjeta",error);
    })
  }

  /* Sin usar DELETE
    const borrarTarjeta = (id)=>{
      setVideo(videosAnteriores =>videosAnteriores.filter(video => video.id !== id))
  } */

  const borrarTarjeta = (id) => {
    fetch(
      `https://my-json-server.typicode.com/Vacherandla/alura-flix-api/videos/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("No se pudo borrar el video")
        }
        setVideo(videosAnteriores => videosAnteriores.filter(video => video.id !== id))
      })
      .catch(error => console.log(error, 'Error al borrar el video'))
  }

  /* editarTarjeta Tampoco funciona porque estoy usando myjsonserver, pero deberia funcionar correctamente de todos modos si se usa un backend funcional */
  const editarTarjeta = (id,tarjetaActualizada) => {
    fetch(
      `https://my-json-server.typicode.com/Vacherandla/alura-flix-api/videos/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(tarjetaActualizada)
    }
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("No se pudo editar el video")
        }
        return response.json();
      })
      .then(tarjetaActualizada=>{
        setVideo(videosAnteriores=>videosAnteriores.map(video =>video.id ===id ? tarjetaActualizada : video))
      })
      .catch(error=>{
        console.error("No se pudo editar el video",error)
      })
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Inicio videos={videos} borrarTarjeta={borrarTarjeta} editarTarjeta={editarTarjeta}/>}></Route>          
          <Route path="add" element={<Agregar crearTarjeta={crearTarjeta} />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
