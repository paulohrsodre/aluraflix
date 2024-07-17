import { styled, css } from "styled-components";

const Button = styled.button`
    padding: 1rem;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;

    ${({ $variant }) => {
        switch ($variant) {
            case 'primary':
                return css`
                    width: 180px;
                    height: 54px;
                    color: var(--color-white);
                    border: 3px solid var(--color-blue);
                    border-radius: 15px;
                    background-color: var(--color-black);
                `
            case 'secondary':
                return css`
                    width: 180px;
                    height: 54px;
                    color: var(--color-white);
                    background: transparent;
                    border: 3px solid var(--color-white);
                    border-radius: 15px;
                `
            case 'terciary':
                return css`
                    width: 180px;
                    height: 54px;
                    color: var(--color-white);
                    background: transparent;
                    border: 3px solid var(--color-blue);
                    border-radius: 15px;
                `
            default:
                return css``;
        }
    }}
`

export default Button