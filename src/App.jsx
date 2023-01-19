import './App.css';
import React, { useState, useEffect } from 'react'
import Triangle from './components/Triangle'
import Circle from './components/Circle'
import Square from './components/Square'
function App() {
  const [triangle, setTriangle] = useState({ color: '#79d747', number: 100 })
  const [square, setSquare] = useState({ color: '#843333', number: 99 })
  const [circle, setCircle] = useState({ color: '#2c3fd7', number: 98 })
  useEffect(() => {
    triangle.color === square.color && circle.color === square.color && alert('Todas las figuras tienen el mismo color')
  }, [triangle.color, square.color, circle.color])
  useEffect(() => {
    triangle.number === square.number && circle.number === square.number && alert('Todas las figuras tienen el mismo tamaño')
  }, [triangle.number, square.number, circle.number])
  return (
    <div className="App">
      <h1>Ejercicio useState y useEffect</h1>
      <Triangle state={triangle} setter={setTriangle}></Triangle>
      <Circle state={circle} setter={setCircle}></Circle>
      <Square state={square} setter={setSquare}></Square>
    </div>
  );
}

export default App;
