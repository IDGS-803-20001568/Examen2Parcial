import  { useState } from 'react';
import Resistencia from './assets/Resistencia.png';
import './App.css';

const colores = [
  { nombre: 'Negro', valor: 0, multiplicador: 1, tolerancia: null },
  { nombre: 'Marrón', valor: 1, multiplicador: 10, tolerancia: 1 },
  { nombre: 'Rojo', valor: 2, multiplicador: 100, tolerancia: 2 },
  { nombre: 'Naranja', valor: 3, multiplicador: 1000, tolerancia: null },
  { nombre: 'Amarillo', valor: 4, multiplicador: 10000, tolerancia: null },
  { nombre: 'Verde', valor: 5, multiplicador: 100000, tolerancia: 0.5 },
  { nombre: 'Azul', valor: 6, multiplicador: 1000000, tolerancia: 0.25 },
  { nombre: 'Violeta', valor: 7, multiplicador: 10000000, tolerancia: 0.1 },
  { nombre: 'Gris', valor: 8, multiplicador: 100000000, tolerancia: 0.05 },
  { nombre: 'Blanco', valor: 9, multiplicador: null, tolerancia: null },
  { nombre: 'Oro', valor: null, multiplicador: 0.1, tolerancia: 5 },
  { nombre: 'Plata', valor: null, multiplicador: 0.01, tolerancia: 10 },
];

function App() {
  const [banda1, setBanda1] = useState(colores[0]);
  const [banda2, setBanda2] = useState(colores[0]);
  const [multiplicador, setMultiplicador] = useState(colores[0]);
  const [tolerancia, setTolerancia] = useState(colores[0]);

  const calcularResistencia = () => {
    const valorResistencia = (banda1.valor * 10 + banda2.valor) * multiplicador.multiplicador;
    return valorResistencia ? valorResistencia.toFixed(2) : 'N/A';
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Calculadora de Resistencia</h1>
        <img id='Resistencia' src={Resistencia} alt="Resistencia" />
      </div>

      <div className="card">
        <h2>Coloca los colores de la resistencia:</h2>

        <div className="selector-container">
          <div>
            <label>Banda 1: </label>
            <select onChange={(e) => setBanda1(colores[e.target.value])}>
              {colores.slice(0, 10).map((color, index) => (
                <option value={index} key={index}>{color.nombre}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Banda 2: </label>
            <select onChange={(e) => setBanda2(colores[e.target.value])}>
              {colores.slice(0, 10).map((color, index) => (
                <option value={index} key={index}>{color.nombre}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Multiplicador: </label>
            <select onChange={(e) => setMultiplicador(colores[e.target.value])}>
              {colores.filter(color => color.multiplicador !== null).map((color, index) => (
                <option value={index} key={index}>{color.nombre}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Tolerancia: </label>
            <select onChange={(e) => setTolerancia(colores[e.target.value])}>
              {colores.filter(color => color.tolerancia !== null).map((color, index) => (
                <option value={index} key={index}>{color.nombre}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="result">
          <h3>Resistencia: {calcularResistencia()} Ω  {tolerancia.tolerancia}%</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
