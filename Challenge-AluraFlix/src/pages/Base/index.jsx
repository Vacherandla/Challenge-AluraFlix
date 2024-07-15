import Header from "components/Header/Header"
import Container from "components/Container"
import Footer from "components/Footer"
import { Outlet } from "react-router-dom"

function Base(){
    return(
        <main>
            <Header/>
                <Container>
                    <Outlet/>
                </Container>
            <Footer/>
        </main>
    )
}

export default Base