import { useState } from "react";
import { pizzaPrices, calculateTotal } from "./pizzaData";
import "../assets/PizzeriaStyles.css";

const PizzeriaForm = () => {
  const [selectedPizza, setSelectedPizza] = useState(pizzaPrices[0].name);
  const [selectedSize, setSelectedSize] = useState("chica");
  const [paymentMethod, setPaymentMethod] = useState("efectivo");
  const [total, setTotal] = useState(0);

  const pizzaPrice = pizzaPrices.find((pizza) => pizza.name === selectedPizza).price;

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedTotal = calculateTotal(pizzaPrice, selectedSize, paymentMethod);
    setTotal(calculatedTotal);
  };

  return (
    <div className="pizzeria-form">
      <form onSubmit={handleSubmit}>
        <h2>Ordena tu Pizza</h2>

        {/* Selección de pizza */}
        <div>
          <label htmlFor="pizza">Selecciona tu pizza:</label>
          <select
            id="pizza"
            value={selectedPizza}
            onChange={(e) => setSelectedPizza(e.target.value)}
          >
            {pizzaPrices.map((pizza, index) => (
              <option key={index} value={pizza.name}>
                {pizza.name} - ${pizza.price}
              </option>
            ))}
          </select>
        </div>

        {/* Selección de tamaño */}
        <div>
          <label>Tamaño:</label>
          <label>
            <input
              type="radio"
              name="size"
              value="chica"
              checked={selectedSize === "chica"}
              onChange={(e) => setSelectedSize(e.target.value)}
            />
            Chica
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="mediana"
              checked={selectedSize === "mediana"}
              onChange={(e) => setSelectedSize(e.target.value)}
            />
            Mediana
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="grande"
              checked={selectedSize === "grande"}
              onChange={(e) => setSelectedSize(e.target.value)}
            />
            Grande
          </label>
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
