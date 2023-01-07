import React, { useContext} from 'react'
import contexto from '../context/contexto';

export const Item = (props) => {

  const { nombre, medidas, img, precio, id } = props;
  const { setCar } = useContext(contexto);

  return (
    <>
      <div className="home-item">
        <img
          src={img}
          alt={`${nombre}, ${id}`}
          className="home-item-img"
        />
        <div className="home-item-info">
          <h1 className="home-item-titulo">{nombre}</h1>
          <p className="home-item-medidas">Medidas: {medidas}</p>
          <div className="home-item-actions">
            <h3 className="home-item-precio">${precio}</h3>
            <button className="home-item-comprar" onClick={() => { setCar(id) }}>+</button>
          </div>
        </div>
      </div>
    </>
  )
}
