import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';
import Category from '../Category';
import { useEffect, useState } from 'react';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 2rem 0;
`;

const Carousel = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        border-radius: 10px;
    }

    & > div {
        scroll-snap-align: start;
        flex: 0 0 30%;
        margin-right: 1rem;
        width: 100%;

        @media (max-width: 1024px) {
            flex: 0 0 45%;
        }

        @media (max-width: 768px) {
            flex: 0 0 90%;
        }
    }
`;

const Gallery = ({ tag, variant, size, videos }) => {
    const [videoList, setVideoList] = useState(videos);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setVideoList(videos);
        setIsLoading(false)
    }, [videos]);

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/videos/${id}`, {
                method: 'DELETE',
            });
            setVideoList(videoList.filter(video => video.id !== id));
        } catch (error) {
            console.error('Erro ao deletar o vídeo:', error);
        }
    };

    const handleEdit = async (id, updatedData) => {
        try {
            const response = await fetch(`http://localhost:3000/videos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            const updatedVideo = await response.json();
            setVideoList(videoList.map(video => (video.id === id ? updatedVideo : video)));
        } catch (error) {
            console.error('Erro ao editar o vídeo:', error);
        }
    };

    return (
        <Section>
            <Category variant={variant} size={size}>{tag}</Category>
            {isLoading ? (
                <p>Loading videos...</p>
            ) : (
                <Carousel>
                    {videoList.map((video, index) => (
                        <div key={index}>
                            <Card
                                $image={video.imagem}
                                onDelete={() => handleDelete(video.id)}
                                onEdit={(updatedData) => handleEdit(video.id, updatedData)}
                                data={{
                                    id: video.id,
                                    titulo: video.titulo,
                                    categoria: video.categoria,
                                    imagem: video.imagem,
                                    video: video.video,
                                    descricao: video.descricao,
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            )}
        </Section>
    );
};

Gallery.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['frontend', 'backend', 'mobile']).isRequired,
    size: PropTypes.oneOf(['large', 'small']).isRequired,
    videos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            titulo: PropTypes.string.isRequired,
            categoria: PropTypes.string.isRequired,
            imagem: PropTypes.string.isRequired,
            video: PropTypes.string.isRequired,
            descricao: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Gallery;

