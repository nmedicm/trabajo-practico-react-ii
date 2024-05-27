import { PizzaContext } from "../context/PizzaProvider"
import { useContext } from "react"

export const Carrito = () => {
    const {carrito, total, incrementar, decrementar} = useContext(PizzaContext);

    return(
        <div className="container-carrito">
        <h5>Detalle del pedido</h5>
        {
            carrito &&
            carrito.map((pizza)=>(
                <>
                <div className="detail-carrito" key={pizza.id}>
                    <div className="detail-carrito-pizza text-capitalize">
                        <img src={pizza.img} width={40} alt="" className="mx-2"/>
                        <h5>{pizza.name}</h5>
                    </div>
                <div className="detail-carrito-cantidades"> 
                <span className="mx-2">{(pizza.count * pizza.price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</span>
                <button className="mx-2" onClick={() => decrementar(pizza.id)}>-</button>
                <span className="mx-2">{pizza.count}</span>
                <button className="mx-2" onClick={() => incrementar(pizza.id)}>+</button>
                </div>   
                </div></>
            ))
        }
        <h1>Total: {total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h1>
        <button className="btn btn-success">Ir a pagar</button>
        </div>
    )
}