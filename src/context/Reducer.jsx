import { listar_producto, agregar_carrito, eliminar_carrito } from "../types/types";

export const Reducer = (state, action) => {
    const { payload, type } = action
    switch (type) {
        case listar_producto:
            return { ...state, products: payload }
        case agregar_carrito:
            return {
                ...state,
                carrito: [
                    ...state.carrito,
                    state.products.filter(item => item.id == parseInt(payload))
                ]
            }
        case eliminar_carrito:
            return {
                ...state,
                carrito: state.carrito.filter(item => item[0].id !== payload)
            }
        default:
            break;
    }
};