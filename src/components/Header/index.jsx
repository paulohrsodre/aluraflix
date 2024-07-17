import { styled } from "styled-components";
import Button from "../Button";
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-primary);
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);;
    border-bottom: 4px solid var(--color-blue);
    padding: 0 50px;
    margin: 0 auto;
    max-width: 1343px;
    width: 100%;
    height: 125px;
    img {
        width: 168px;
        height: 40px;
        margin: 0;
    }
`

const StyledNav = styled.nav`
    display: flex;
    ul {
        display: flex;
        gap: 25px;
        list-style: none;
        margin: 0;
    } a {
        color: #FFF;
        text-decoration: none;
    }
`

const Header = () => {
    
    return (
        <StyledHeader>
            <img src="/images/Logo.png" alt="Logo da Aluraflix" />
            <StyledNav>
                <ul>
                    <li>
                        <Link to='/'>
                            <Button $variant='primary' >Home</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/new-video'>
                            <Button $variant='secondary' >Novo Vídeo</Button>
                        </Link>
                    </li>
                </ul>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;