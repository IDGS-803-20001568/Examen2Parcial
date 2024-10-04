export const pizzaPrices = [
    { name: 'Margarita', price: 100 },
    { name: 'Pepperoni', price: 120 },
    { name: 'Hawaiana', price: 130 },
    { name: 'Cuatro Quesos', price: 140 },
    { name: 'Vegetariana', price: 110 },
  ];
  
  export const sizePrices = {
    chica: 0, 
    mediana: 30, 
    grande: 50, 
  };
  
  export const calculateTotal = (pizzaPrice, size, paymentMethod) => {
    let total = pizzaPrice + sizePrices[size];
  
    if (paymentMethod === 'tarjeta') {
      total += total * 0.05; 
    }
  
    return total.toFixed(2); 
  };
  