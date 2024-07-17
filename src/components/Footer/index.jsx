import { styled } from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-black);
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);;
    border-top: 4px solid var(--color-blue);
    padding: 0 50px;
    margin: 150px 0 auto;
    max-width: 1343px;
    width: 100%;
    height: 125px;
    img {
        width: 168px;
        height: 40px;
        margin: 0;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <img src="/images/Logo.png" alt="Logo da Aluraflix" />
        </StyledFooter>
    )
}

export default Footer;