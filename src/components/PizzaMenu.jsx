import { pizzaPrices, sizePrices } from "./pizzaData";
import "../assets/PizzeriaStyles.css";

const PizzaMenu = () => {
  return (
    <div className="pizza-menu">
      <h2>Menú de Pizzas</h2>
      <ul>
        {pizzaPrices.map((pizza, index) => (
          <li key={index}>
            <span>{pizza.name}</span>
            <span>${pizza.price}</span>
          </li>
        ))}
      </ul>
      <h2>Precios por Tamaño</h2>
      <ul>
        {Object.keys(sizePrices).map((size, index) => (
          <li key={index}>
            <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
            <span>
              {size === "chica" ? `$${sizePrices[size]}` : `+ $${sizePrices[size]}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaMenu;
