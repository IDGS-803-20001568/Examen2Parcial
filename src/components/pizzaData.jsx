// pizzaData.jsx
export const sizePrices = {
  chica: 100, 
  mediana: 130, 
  grande: 150, 
};

export const ingredientPrices = [
  { name: "Extra Queso", price: 10 },
  { name: "Jamón", price: 10 },
  { name: "Piña", price: 10 },
  { name: "Champiñones", price: 10 },
  { name: "Aceitunas", price: 10 },
];

// Calcular total considerando el número de pizzas
export const calculateTotal = (selectedSize, selectedIngredients, paymentMethod, numberOfPizzas) => {
  let total = sizePrices[selectedSize];  // Precio base según el tamaño seleccionado

  // Añadir el costo de los ingredientes seleccionados
  selectedIngredients.forEach((ingredient) => {
    total += ingredientPrices.find((i) => i.name === ingredient).price;
  });

  // Añadir el 5% si el método de pago es tarjeta
  if (paymentMethod === 'tarjeta') {
    total += total * 0.05; 
  }

  return (total * numberOfPizzas).toFixed(2); // Multiplicar por el número de pizzas
};
