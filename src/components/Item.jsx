import React, { useContext, useState } from 'react';
import ErrorImg from '../assest/statics/505166-200.png';
import Swal from 'sweetalert2';
import MainButton from '../containers/MainButton';
import contexto from '../context/contexto';

export const Item = (props) => {
  const { nombre, medidas, img, precio, id } = props;
  const { setCar } = useContext(contexto);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div className="home-item">
        {
          imageError ? (
            <img
              src={ErrorImg}
              alt='ErrorImg'
              className="home-item-img"
            />
          ) : (<img
            src={img}
            alt={`${nombre}, ${id}`}
            className="home-item-img"
            onError={() => setImageError(true)}
          />)
        }
        <div className="home-item-info">
          <h1 className="home-item-titulo">{nombre}</h1>
          <p className="home-item-medidas">Medidas: {medidas}</p>
          <div className="home-item-actions">
            <h3 className="home-item-precio">${precio}</h3>
            <MainButton onClick={() => { setCar(id) }}>+</MainButton>
            <MainButton onClick={() => Swal.fire({
              title: `${props.nombre}`,
              imageUrl: `${`${props.img}`}`,
              text: `${props.descripcion}`
            })}>Detalle</MainButton>
          </div>
        </div>
      </div>
    </>
  )
}
