import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.section `
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    padding: 1rem 7%;
    iframe{
    height: 80vh;
}
`

function Player(){
 const [video,setVideo]= useState([])

const parametros = useParams()
useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/Vacherandla/alura-flix-api/videos?id=${parametros.id}`)
    .then(response=>response.json())
    .then(data=>{
        setVideo(...data)
    })
 },[])   

console.log(video);
if(!video)return <NotFound/>
    return(
       <>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <StyledContainer>
        <iframe width="100%" height="100%" 
        src={video.link} 
        title={video.titulo} 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </StyledContainer>
       </>
    )
}

export default Player;