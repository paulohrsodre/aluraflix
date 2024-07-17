import styled from 'styled-components';
import PropTypes from "prop-types";
import EditCard from '../EditCard';
import { useState } from 'react';

const CardContainer = styled.div`
    position: relative;
    width: 432px;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${({ $image }) => $image});
    background-size: cover;
    background-position: center;
    filter: brightness(0.8);
`;

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
`;

const Button = styled.button`
    background-color: #fff;
    color: #000;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ddd;
    }

    &:active {
        background-color: #ccc;
    }
`;

const Card = ({ $image, onDelete, onEdit, data }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleEdit = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleSubmit = (updatedData) => {
        onEdit(updatedData);
        setModalOpen(false);
    };

    console.log('Card data', data);

    return (
        <CardContainer>
            <BackgroundImage $image={$image} />
            <Footer>
                <Button onClick={handleEdit}>Editar</Button>
                <Button onClick={onDelete}>Deletar</Button>
            </Footer>
            <EditCard
                isOpen={isModalOpen}
                onClose={handleClose}
                onSubmit={handleSubmit}
                initialData={data}
            />
        </CardContainer>
    );
};

Card.propTypes = {
    $image: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        titulo: PropTypes.string,
        categoria: PropTypes.string,
        imagem: PropTypes.string,
        video: PropTypes.string,
        descricao: PropTypes.string,
    }).isRequired,
};

export default Card;