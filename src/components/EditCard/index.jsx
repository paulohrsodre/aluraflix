import styled from 'styled-components';
import Button from "../Button";
import xClose from "../../assets/x-close.png";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    border: 5px solid var(--color-light-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--color-dark-blue);
    color: var(--color-white);
    font-size: 20px;
    font-family: var(--font-secondary);
    padding: 20px 100px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    max-width: 974px;
    width: 100%;
    white-space: nowrap;
    box-sizing: border-box;
    position: relative;
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 100%;
        box-sizing: border-box;
    }
    h1 {
        font-family: var(--font-primary);
        font-size: 60px;
        font-weight: 900;
        text-transform: uppercase;
        color: var(--color-blue);
    }
`;

const CloseButton = styled.button`
    background: transparent;
    padding: 32px;
    border: none;
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
`;

const Input = styled.input`
    background-color: transparent;
    width: 100%;
    padding: 1rem;
    font-size: 20px;
    color: var(--color-gray);
    border: 3px solid var(--color-blue);
    border-radius: 15px;
    box-sizing: border-box;
`;

const Select = styled.select`
    background-color: transparent;
    width: 100%;
    padding: 1rem;
    font-size: 20px;
    color: var(--color-gray);
    border: 3px solid var(--color-blue);
    border-radius: 15px;
    appearance: none;
    background-image: url(xClose);
    background-position: right 10px top 50%;
    background-repeat: no-repeat;
    option {
        background-color: var(--color-dark-blue);
        color: var(--color-white);
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
`

const EditCard = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        titulo: initialData.titulo,
        categoria: initialData.categoria,
        imagem: initialData.imagem,
        video: initialData.video,
        descricao: initialData.descricao,
    });

    const initialPlaceholders = {
        titulo: 'Escolha um titulo para o seu video',
        categoria: 'Selecione uma categoria',
        imagem: 'Imagem',
        video: 'Video',
        descricao: 'Descrição',
    };

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setFormData(initialPlaceholders);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <h1>Editar Card</h1>
                <CloseButton onClick={onClose}>
                    <img src={xClose} alt="ícone X de botão fechar" />
                </CloseButton>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="titulo">Título</Label>
                        <Input
                            type="text"
                            id="titulo"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="categoria">Categoria</Label>
                        <Select
                            id="categoria"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="frontend">Front-End</option>
                            <option value="backend">Back-End</option>
                            <option value="mobile">Mobile</option>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="imagem">Imagem</Label>
                        <Input
                            type="text"
                            id="imagem"
                            name="imagem"
                            value={formData.imagem}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="video">Vídeo</Label>
                        <Input
                            type="text"
                            id="video"
                            name="video"
                            value={formData.video}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="descricao">Descrição</Label>
                        <Input
                            as="textarea"
                            id="descricao"
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleChange}
                            rows={4}
                            required
                        />
                    </FormGroup>
                    <ButtonGroup>
                        <Button $variant="primary" type='submit'>Enviar</Button>
                        <Button $variant="secondary" type='button' onClick={handleClear}>Limpar</Button>
                    </ButtonGroup>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

EditCard.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
        titulo: PropTypes.string,
        categoria: PropTypes.string,
        imagem: PropTypes.string,
        video: PropTypes.string,
        descricao: PropTypes.string,
    }).isRequired,
};

export default EditCard;