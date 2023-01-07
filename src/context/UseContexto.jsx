import contexto from "./contexto";
import axios from 'axios';
import { useReducer } from "react";
import { Reducer } from "./Reducer";

export default function UseContexto(props) {

    const url = 'https://devrockstore-default-rtdb.firebaseio.com/productos.json';
    const { children } = props;
    const intitialState = {
        products: [],
        carrito: []
    };
    const [state, dispatch] = useReducer(Reducer, intitialState);

    const getProduct = async () => {
        const res = await axios.get(url)
        dispatch({ type: 'listar_producto', payload: res.data })
    }

    const setCar = (item) => {
        dispatch({ type: "agregar_carrito", payload: item })
    }

    const eraseItemCar = (item) => {
        dispatch({ type: "eliminar_carrito", payload: item })
    }

    return (
        <contexto.Provider value={{
            productos: state.products,
            carrito: state.carrito,
            getProduct,
            setCar,
            eraseItemCar
        }}>
            {children}
        </contexto.Provider>
    )
}
