import PizzeriaForm from './components/PizzeriaForm';
import PizzaMenu from './components/PizzaMenu';
import './assets/PizzeriaStyles.css';

function App() {
  return (
    <div className="App">
      <div className="pizzeria-container">
        <PizzeriaForm />
        <PizzaMenu />
      </div>
    </div>
  );
}

export default App;
