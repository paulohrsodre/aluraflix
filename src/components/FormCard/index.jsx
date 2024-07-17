import styled from "styled-components"
import Button from "../Button"
import PropTypes from "prop-types";
import { useState } from "react"

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 1172px;
    margin-top: 70px;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 60px;
        font-weight: 900;
        margin: 0;
    }
    h2 {
        font-size: 20px;
        font-weight: 400;
        line-height: 56px;
        margin: 0;
    }
`

const FormInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-top: 48px;
    div > h3 {
        font-size: 36px;
        font-weight: 600;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 3px solid var(--color-dark-gray);
        border-bottom: 3px solid var(--color-dark-gray);
        margin: 0;
    }
`

const FormSection = styled.section`
    display: flex;
    gap: 20px;
    width: 100%;
`

const FromGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 20px;
    label {
        font-weight: 600;
        line-height: 24px;
        text-transform: capitalize;
    }
    input, textarea, select {
        background-color: transparent;
        border: 3px solid var(--color-dark-gray);
        border-radius: 15px;
        margin-top: 15px;
        color: var(--color-gray);
        padding: 16px;
    }
    textarea {
        width: 50%;
        height: 220px;
    }
    select > option {
        background-color: var(--color-dark-gray);
        
    }
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 30px;
`

const FormCard = ({ handleAdd }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        imagem: '',
        video: '',
        descricao: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd(formData);
    };

    const handleClear = () => {
        setFormData({
            titulo: '',
            categoria: '',
            imagem: '',
            video: '',
            descricao: '',
        });
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <TitleWrapper>
                <h1>Novo vídeo</h1>
                <h2>Complete o formulário para criar um novo card de vídeo.</h2>
            </TitleWrapper>
            <FormInputsWrapper>
                <div>
                    <h3>Card</h3>
                </div>
                <FormSection>
                    <FromGroup>
                        <label htmlFor="titulo">Título</label>
                        <input 
                            type="text"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleChange}
                            required 
                        />
                    </FromGroup>
                    <FromGroup>
                        <label htmlFor="categoria">Categoria</label>
                        <select
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
                        </select>
                    </FromGroup>
                </FormSection>
                <FormSection>
                    <FromGroup>
                        <label htmlFor="imagem">Imagem</label>
                        <input 
                            type="text" 
                            id="imagem" 
                            name="imagem" 
                            value={formData.imagem}
                            onChange={handleChange}
                            required
                        />
                    </FromGroup>
                    <FromGroup>
                        <label htmlFor="video">Vídeo</label>
                        <input 
                            type="text"
                            id="video" 
                            name="video" 
                            value={formData.video}
                            onChange={handleChange}
                            required
                        />
                    </FromGroup>
                </FormSection>
                <FormSection>
                    <FromGroup>
                        <label htmlFor="">Descrição</label>
                        <textarea 
                            id="descricao" 
                            name="descricao" 
                            value={formData.descricao}
                            onChange={handleChange}
                            rows={2}
                            required
                        />
                    </FromGroup>
                </FormSection>
                <ButtonGroup>
                    <Button $variant="terciary" type="submit">Salvar</Button>
                    <Button $variant="secondary" type="button" onClick={handleClear}>Limpar</Button>
                </ButtonGroup>
            </FormInputsWrapper>
        </FormContainer>
    )
}

FormCard.propTypes = {
    handleAdd: PropTypes.func.isRequired,
};

export default FormCard
