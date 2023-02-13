import { Item } from "./Item";
// import '../styles/ItemList.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ItemList = ({items})=>{

    return(
        <Container fluid="md">
        <Row>
            {
                items.map(producto=>(
                    <Col xs={6} md={4}>
                        <Item key={producto.id} item={producto}/>
                    </Col>  
                ))
            }
            </Row>
        </Container>
    )
}