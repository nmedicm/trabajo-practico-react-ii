import { useState, useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";

export const Home = () => {
    const { pizzas, addCarrito } = useContext(PizzaContext);
    const navigate = useNavigate()

    return(
        <>
        <Banner/>
        <div className="container-home">
            

            <div className="row">
            {pizzas &&
                pizzas.map((pizza) => (
                <div key={pizza.id} className="col-md-3 mt-3">
                <div className="pizza-card text-capitalize">
                    <img src={pizza.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{pizza.name}</h5>
                        <p>Ingredientes:</p>
                        <ul className="ingredients">
                            <li>{pizza.ingredients[0]}</li>
                            <li>{pizza.ingredients[1]}</li>
                            <li>{pizza.ingredients[2]}</li>
                            <li>{pizza.ingredients[3]}</li>
                        </ul>
                        <h5 className="card-price">{pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h5>
                        <div className="d-flex botones">
                            <button className="btn view" onClick={()=>navigate(`/detail/${pizza.name.replace(/\s/g, '-').toLowerCase()}`)}>Ver Más 👁️</button>
                            <button className="btn add" onClick={()=>addCarrito(pizza)}>Añadir 🛒</button>
                    </div>

                </div>
                </div>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}