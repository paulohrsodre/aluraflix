import styled from "styled-components"
import GlobalStyles from "../../components/GlobalStyles"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
`

const NotFoundDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: var(--color-blue);
    h1 {
        font-size: 100px;
        color: var(--color-white);
    }
    h2 {
        font-size: 60px;
    }
    h3 {
        font-size: 40px;
    }
`

const NotFound = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    }

    return (
        <>
            <GlobalStyles />
            <AppContainer>
                <Header />
                    <NotFoundDiv>
                        <h1>Error: 404</h1>
                        <h2>Página não encontrada</h2>
                        <h3>Desculpe-nos pelo transtorno</h3>
                        <Button $variant="terciary" onClick={handleBackClick}>Voltar</Button>
                    </NotFoundDiv>
                <Footer />
            </AppContainer>
        </>
    )
}

export default NotFound