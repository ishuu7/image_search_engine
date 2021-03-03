import { Card } from 'react-bootstrap';


const Image = (props) => {
    return (
        <Card style = {{margin: "10px auto"}}>
            <Card.Img variant="top" src={props.props.regular} />
        </Card>
    )
}

export default Image;