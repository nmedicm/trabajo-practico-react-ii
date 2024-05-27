import { createContext, useEffect, useState } from "react";
import pizza from "../pizzas.json";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    const addCarrito = ({id, price, name, img}) => {
        const productoEncontrado = carrito.findIndex(p => p.id === id);
        if (productoEncontrado !== -1) {
            const nuevoCarrito = [...carrito];
            nuevoCarrito[productoEncontrado] = {
                ...carrito[productoEncontrado],
                count: carrito[productoEncontrado].count + 1,
            };
            setCarrito([...carrito]);
        } else {
            const producto = {id, price, name, img, count: 1};
            setCarrito([...carrito, producto]);
        }
        sumaTotal();
    };

    const incrementar = (id) => {
        const nuevoCarrito = carrito.map(item => {
            if (item.id === id) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });
        setCarrito(nuevoCarrito);
        sumaTotal();
    };

    const decrementar = (id) => {
        const nuevoCarrito = carrito.map(item => {
            if (item.id === id && item.count > 1) {
                return { ...item, count: item.count - 1 };
            }
            return item;
        }).filter(item => item.count > 0); 
        setCarrito(nuevoCarrito);
        sumaTotal();
    };

    const sumaTotal = () => {
        const suma = carrito.reduce((acumulador, valorActual) => acumulador + (valorActual.price * valorActual.count), 0);
        console.log(suma);
        setTotal(suma);
    };

    useEffect(() => {
        setPizzas(pizza);
        sumaTotal();
    }, []);

    useEffect(() => {
        sumaTotal();
    }, [carrito]);

    return (
        <PizzaContext.Provider value={{ pizzas, carrito, total, addCarrito, incrementar, decrementar }}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaProvider;