import styled from "styled-components"
import Banner from "../Banner/index"
import bannerBackground from "../Banner/player.png"
import thumbnail from '../Banner/player_thumb.png'

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    max-width: 1443px;
    margin: 0;
`

const Content = () => {
    return(
        <StyledMain>
            <Banner 
                text='SEO com React'
                backgroundImage={bannerBackground}
                paragraph='Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! '
                thumbnail={thumbnail}
            />
        </StyledMain>
    )
}

export default Content;