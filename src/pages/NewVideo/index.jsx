import styled from "styled-components";
import GlobalStyles from "../../components/GlobalStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormCard from "../../components/FormCard";
import { useNavigate } from "react-router-dom";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
`

const NewVideo = () => {
    const navigate = useNavigate();

    const handleAdd = async (newVideo) => {
        try {
            const response = await fetch('http://localhost:3000/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newVideo),
            });
            await response.json();
            navigate('/');  // Redireciona para a página inicial após adicionar o vídeo
        } catch (error) {
            console.error('Erro ao adicionar o vídeo:', error);
        }
    };

    return (
        <>
            <GlobalStyles />
            <AppContainer>
                <Header />
                <FormCard handleAdd={handleAdd} />
                <Footer />
            </AppContainer>
        </>
    )
}

export default NewVideo