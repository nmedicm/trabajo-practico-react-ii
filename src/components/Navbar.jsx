import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaProvider';

const Navbar = () => {
  const { total } = useContext(PizzaContext);
  const formattedTotal = total ? total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) : '';
  return (
    <nav className="navbar">
      <div className="logo-pizzeria">
        <p className="mx-2">🍕</p>
        <Link to="/">Pizzería Mamma Mía!</Link>
      </div>
      <div className="logo-carrito">
        <p className="mx-2">🛒</p>
        <Link to="/carrito">{formattedTotal}</Link>
      </div>
    </nav>
  );
};
export default Navbar;

