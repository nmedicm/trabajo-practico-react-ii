import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PizzaContext } from "../context/PizzaProvider";

const Detail = () => {
    const { pizzas, addCarrito } = useContext(PizzaContext);
    const { name } = useParams();
    const [pizzaDetail, setPizzaDetail] = useState(null);

    useEffect(() => {
        const formattedName = name.replace(/-/g, ' ');
        const pizzaData = pizzas.find(pizza => pizza.name.toLowerCase() === formattedName.toLowerCase());
        setPizzaDetail(pizzaData);
    }, [name, pizzas]);

    if (!pizzaDetail) {
        return (
            <>
            <h2>No se encontró la pizza especificada.</h2>
            </>
        )
    }

    return (
        <div className="containerDetail mt-5">
            <div className="card mb-3 estilos">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img
                            src={pizzaDetail.img}
                            className="img-fluid estilos rounded-start"
                            alt={pizzaDetail.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">
                                {pizzaDetail.name}
                            </h5>
                            <p className="card-text">{pizzaDetail.desc}</p>
                            <ul className="ingredientsDetail text-capitalize">
                                {pizzaDetail.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            <div className="precio-opcion-detail">
                                <h4>Precio: {pizzaDetail.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h4>
                                <button className="btn add" onClick={() => addCarrito(pizzaDetail)}>Añadir 🛒</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;