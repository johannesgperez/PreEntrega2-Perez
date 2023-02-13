import Container from 'react-bootstrap/Container';
// import '../styles/ItemDetail.css';
// import {Link} from 'react-router-dom';

export const ItemDetail = ({item})=>{


    return(
        <Container>
        <div>
            <p style={{width: "100%"}}></p>
            <div>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className>
                <h4>{item.product_name}</h4>
                <h6>Categoria: {item.categoria}</h6>
                <h5>$ {item.price}</h5>
            </div>
        </div>
        </Container>
    )
}