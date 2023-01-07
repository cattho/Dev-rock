import React, { useContext, useEffect } from 'react'
import { Item } from '../components/Item'
import contexto from '../context/contexto'

export const Home = () => {
    const { getProduct, productos } = useContext(contexto)

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <div className="container">
                <div className="wraper">
                    <div className="home">
                        {
                            productos.map(item => (
                                <Item key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}