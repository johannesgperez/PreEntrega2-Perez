import { Link } from "react-router-dom";


import '../styles/Item.css';

export const Item = ({ item }) => {
  return (
<div className="tarjeta-producto">
<img src={item.pictureUrl} alt={item.title}/>
<h4>{item.product_name}</h4>
<p>$ {item.price}</p>
<Link to={`/item/${item.id}`}>
    <button className='boton-ver'>Ver detalle</button>
</Link>
</div>
  );
};


