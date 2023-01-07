import React from 'react'
import ikBorrar from '../assest/statics/borrar.png'

export const CarritoItem = (props) => {

    const { nombre, precio, img, id } = props[0];

  const handleErase = () => {
    props.eraseItemCar(id);
  }

    return (
        <>
            <div className="carrito-item">
                <img
                    src={img}
                    alt={nombre}
                    className="carrito-item-img"
                />
                <div className="carrito-txt">
                    <h1 className="carrito-item-titulo">{nombre}</h1>
                    <h3 className="carrito-item-precio">$ {precio}</h3>
                </div>
                <img src={ikBorrar} alt="" className="carrito-item-borrar" onClick={handleErase} />
            </div>
        </>
    )
}
