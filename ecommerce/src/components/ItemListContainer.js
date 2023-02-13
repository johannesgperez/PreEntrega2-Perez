
import { useEffect, useState } from "react";

import {arrayProducts}  from "./arrayProducts";

import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

import '../styles/ItemListContainer.css';

export const ItemListContainer = ()=>{
    const {tipoProducto} = useParams();

    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arrayProducts);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!tipoProducto){
                setProductos(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.categoria === tipoProducto);
                setProductos(nuevaLista)
            }
        })
    },[tipoProducto])

    return(
        <div>
            <h1>Lista de Productos</h1>
            <ItemList items={productos}/>
        </div>
    )
}