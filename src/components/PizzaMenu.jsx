import { sizePrices } from "./pizzaData";
import "../assets/PizzeriaStyles.css";

const PizzaMenu = () => {
  return (
    <div className="pizza-menu">
      <h2>Precios de Pizzas</h2>
      <ul>
        <li>
          <span>Chica</span>
          <span>$ {sizePrices.chica}</span>
        </li>
        <li>
          <span>Mediana</span>
          <span>$ {sizePrices.mediana}</span>
        </li>
        <li>
          <span>Grande</span>
          <span>$ {sizePrices.grande}</span>
        </li>
      </ul>
    </div>
  );
};

export default PizzaMenu;
