import React from 'react'
import { Link } from 'react-router-dom';
import ikCarrito from '../assest/statics/carrito.png';
import ikVolver from '../assest/statics/volver.png';

export const Header = () => {
  return (
    <>
      <div className="header-dev">
        <Link to="/carrito">
          <img src={ikCarrito} alt="carrito-png" className="carritou" />
        </Link>

        <Link to="/">
          <img src={ikVolver} alt="volver" className="volver" />
        </Link>

        <h1 className="titulo">
          Dev <br />
          RockStore
        </h1>
      </div>
    </>
  )
}
