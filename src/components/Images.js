import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Image from './Image';
import {Row, Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Images = () => {
    const getImageCard = (currentImage, idx) => {
        return (   
            <Col key = {idx} xs = {12} sm = {6} md = {4}style = {{margin: "auto auto"}}>
                <Image key = {idx} props = {currentImage.urls}/>
            </Col>
        )
    }
    const images = useSelector(state => state.resultingPhotos.photos);

    let currentQuery = '';
    currentQuery = useSelector(state => state.queryChange.photos);

    const [message, setMessage] = useState("");

    useEffect(() => {
        if(images) {
            if(images.length !== 0)
                setMessage('Results for ');
            else if(currentQuery === undefined) {
                setMessage('');
            }
            else {
                setMessage('No Results found for ')
            }
        }
        else if(!images) {
            setMessage('');
        }
    }, [images, currentQuery]);
    
    return (
        <div>
            <h1 style = {{ color: "#FFF8DC"}}>{message}<strong>{currentQuery}</strong></h1>
            <Container>
                <Row key = {images.length}>
                    {images.map((currentImage, idx) => getImageCard(currentImage, idx))}
                </Row>
            </Container>
        </div>
    )
}

export default Images;