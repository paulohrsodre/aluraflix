import { styled,  css } from "styled-components";

const categoryStyles = {
    frontend: {
        backgroundColor: "var(--color-light-blue)",
        color: "var(--color-white)"
    },
    backend: {
        backgroundColor: "var(--color-green)",
        color: "var(--color-white)"
    },
    mobile: {
        backgroundColor: "var(--color-yellow)",
        color: "var(--color-white)"
    }
};

const Category = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 15px;
    font-weight: 800;
    text-transform: uppercase;
    ${({ $size }) => $size === 'large' ? css`
        width: 400px;
        height: 50px;
        font-size: 32px;
    ` : css`
        width: 292px;
        height: 70px;
        font-size: 48px;
    `}
    ${({ $variant }) => css`
        background-color: ${categoryStyles[$variant]?.backgroundColor};
        color: ${categoryStyles[$variant]?.color || 'inherit'};
    `}
`;

export default Category;