import "./App.css";
import logo from "./imgs/logo-calculator.png";
import Button from "../src/components/Button";
import Screen from "../src/components/Screen";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const[input, setInput] = useState('');

  const addInput = value =>{
    setInput(input + value);
  };

  const mathResult = () =>{
    if (input){
      setInput(evaluate(input));
    }else{
      alert('Ingrese valores validos para el calculo.')
    }
  };


  return (
    
    <div className="App">
      <div className="logo-container">
        <img className="img-logo" src={logo} alt="logo-react-calculator"></img>
      </div>
      <div className="calculator-container">
        <div className="screen-container">
          <Screen input={input}/>
        </div>
        <div className="fila">
          <Button clickManagment={addInput} >7</Button>
          <Button clickManagment={addInput} >8</Button>
          <Button clickManagment={addInput} >9</Button>
          <Button clickManagment={addInput} >+</Button>
        </div>
        <div className="fila">
          <Button clickManagment={addInput} >4</Button>
          <Button clickManagment={addInput} >5</Button>
          <Button clickManagment={addInput} >6</Button>
          <Button clickManagment={addInput} >-</Button>
        </div>
        <div className="fila">
          <Button clickManagment={addInput} >1</Button>
          <Button clickManagment={addInput} >2</Button>
          <Button clickManagment={addInput} >3</Button>
          <Button clickManagment={addInput} >*</Button>
        </div>
        <div className="fila">
          
        <Button clickManagment={addInput} >/</Button>
          <Button clickManagment={addInput} >0</Button>
          <Button clickManagment={addInput} >.</Button>
          <Button clickManagment={mathResult} >=</Button>
        </div>
        <div className="fila">
          <Button clickManagment={addInput} >(</Button>
          <Button clickManagment={addInput} >)</Button>
        </div>
        <div className="fila">
          <ClearButton clearManagment={() => setInput ('')}>Clear / Limpiar</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
