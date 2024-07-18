import Banner from "../../components/Banner"
import Header from "../../components/Header"
import Gallery from "../../components/Gallery"
import Footer from "../../components/Footer"
import backgroundImage from "../../components/Banner/player.png"
import thumbnail from "../../components/Banner/player_thumb.png"
import GlobalStyles from "../../components/GlobalStyles"
import styled from "styled-components"
import { useEffect, useState } from "react"

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 93px;
`

const Home = () => {
    const [videos, setVideos] = useState({
        frontend: [],
        backend: [],
        mobile: []
    });

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://localhost:3000/videos');
                const data = await response.json();
                // Filtrar os vídeos por categoria
                const frontendVideos = data.filter(video => video.categoria === 'frontend');
                const backendVideos = data.filter(video => video.categoria === 'backend');
                const mobileVideos = data.filter(video => video.categoria === 'mobile');

                // Defina os vídeos filtrados no estado
                setVideos({
                    frontend: frontendVideos,
                    backend: backendVideos,
                    mobile: mobileVideos,
                });
            } catch (error) {
                console.error('Erro ao buscar os vídeos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <>
            <GlobalStyles />
            <AppContainer>
                <Header />
                <Banner 
                    text="SEO com React"
                    backgroundImage={backgroundImage}
                    paragraph='Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!'
                    thumbnail={thumbnail}
                />
                <GalleryContainer>
                    <Gallery tag="Front-End" $variant="frontend" $size="large" videos={videos.frontend} />
                    <Gallery tag="Back-End" $variant="backend" $size="large" videos={videos.backend} />
                    <Gallery tag="Mobile" $variant="mobile" $size="large" videos={videos.mobile} />
                </GalleryContainer>
                <Footer />
            </AppContainer>
        </>
    )
}

export default Home
