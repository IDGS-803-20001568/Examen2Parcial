// PizzeriaForm.jsx
import { useState } from "react";
import { ingredientPrices, calculateTotal } from "./pizzaData"; // Asegúrate de importar sizePrices
import "../assets/PizzeriaStyles.css";

const PizzeriaForm = () => {
  const [selectedSize, setSelectedSize] = useState("chica");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("efectivo");
  const [numberOfPizzas, setNumberOfPizzas] = useState(1); // Estado para el número de pizzas
  const [total, setTotal] = useState(0);

  const handleIngredientChange = (e) => {
    const ingredient = e.target.value;
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((i) => i !== ingredient));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedTotal = calculateTotal(selectedSize, selectedIngredients, paymentMethod, numberOfPizzas); // Pasar el número de pizzas
    setTotal(calculatedTotal);
  };

  return (
    <div className="pizzeria-form">
      <form onSubmit={handleSubmit}>
        <h2>Ordena tu Pizza</h2>

        {/* Selección de tamaño */}
        <div>
          <label htmlFor="size">Tamaño:</label>
          <select
            id="size"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="chica">Chica</option>
            <option value="mediana">Mediana</option>
            <option value="grande">Grande</option>
          </select>
        </div>

        {/* Ingredientes adicionales */}
        <div>
          <label>Ingredientes adicionales ($10 c/u):</label>
          {ingredientPrices.map((ingredient, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`ingredient-${index}`}
                value={ingredient.name}
                checked={selectedIngredients.includes(ingredient.name)}
                onChange={handleIngredientChange}
              />
              <label htmlFor={`ingredient-${index}`}>{ingredient.name}</label>
            </div>
          ))}
        </div>

        {/* Número de pizzas */}
        <div>
          <label htmlFor="numberOfPizzas">Número de Pizzas:</label>
          <input
            type="number"
            id="numberOfPizzas"
            min="1"
            value={numberOfPizzas}
            onChange={(e) => setNumberOfPizzas(parseInt(e.target.value))}
          />
        </div>

        {/* Método de pago */}
        <div>
          <label>Método de Pago:</label>
          <label>
            <input
              type="radio"
              name="payment"
              value="efectivo"
              checked={paymentMethod === "efectivo"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Efectivo
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="tarjeta"
              checked={paymentMethod === "tarjeta"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Tarjeta (+5%)
          </label>
        </div>

        <button type="submit">Calcular Total</button>
        {total > 0 && <h3>Total: ${total}</h3>}
      </form>
    </div>
  );
};

export default PizzeriaForm;
