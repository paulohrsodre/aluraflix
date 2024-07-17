import { styled } from "styled-components";
import PropTypes from "prop-types";
import Category from "../Category";

const BannerWrapper = styled.figure`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    height: 744px; 
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    margin: 0;

    @media (max-width: 1023px) {
        height: 334px; 
    }

    @media (max-width: 430px) {
        display: block; 
    }
`

const ContainerInfo = styled.div`
    display: flex;
    gap: 50px;
    padding: 0 40px 20px 40px;
    position: absolute;   
    z-index: 1;
`

const InfoText = styled.div`
    p {
        font-size: 16px;
        color: var(--color-white);
        font-weight: 300;
    }
`

const InfoImg = styled.div`
    img {
        width: 644px;
    }
`

const StyledTitle = styled.h1`
    text-align: left;
    color: var(--color-white);
    font-size: 46px;
    font-weight: 400;
`

const Banner = ({ text, backgroundImage, paragraph, thumbnail }) => {
    return (
        <BannerWrapper $backgroundImage={backgroundImage}>
            <ContainerInfo>
                <InfoText>
                    <Category variant="frontend" size="small">Front-End</Category>
                    <StyledTitle>{text}</StyledTitle>
                    <p>{paragraph}</p>
                </InfoText>
                <InfoImg>
                    <img src={thumbnail} alt="Imagem da thumbnail do video" />
                </InfoImg>
            </ContainerInfo>
        </BannerWrapper>
    )
}

Banner.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}

export default Banner;
