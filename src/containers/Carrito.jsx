import { useContext } from 'react'
import { CarritoItem } from '../components/CarritoItem'
import contexto from '../context/contexto'

export const Carrito = () => {
    const { carrito, eraseItemCar } = useContext(contexto);
    const totalPrice = carrito.reduce((acc, item) => acc + item[0].precio, 0)


    return (
        <>
            <div className="carrito">
                <div className="carrito-listadito">
                    {
                        carrito.length !== 0 ?

                            carrito.map((item, i) => (
                                <CarritoItem
                                    key={i}
                                    {...item}
                                    eraseItemCar={eraseItemCar}
                                />
                            ))
                            :
                            <p>Carrito vacio</p>
                    }
                    <div className="carrito-precio">
                        Total a pagar <br /><strong>$ {totalPrice}</strong>
                    </div>
                </div>
            </div>
        </>
    )
}
