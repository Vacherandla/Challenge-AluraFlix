import styled from "styled-components";
const FondoModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(10, 12, 148,0.5);
    display: flex;
    align-items:center;
    justify-content:center;
    z-index: 5;
    overflow: auto;
`;

const Contenido = styled.div`    
    background-color: var(--negro);
    padding: 2rem;
    border: 4px solid var(--azul);
    border-radius: 10px;
    width: 80%;
    max-width:500px;
    max-height: 95vh;
    overflow-y: auto;
    justify-content: center;
    margin: 0 auto;
`

const ModalEdit = ({children, onClose})=>{
    return(
        <FondoModal onClick={onClose}>
            <Contenido onClick={(e)=>e.stopPropagation()}>

                {children}
            </Contenido>
        </FondoModal>
    )
}

export default ModalEdit;