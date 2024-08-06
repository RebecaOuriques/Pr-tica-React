//import Card from "./components/Card/Card"
//import Contador from "./components/Contador/Contador"
//import Task from "./components/Task/Task"
import {useState} from 'react';
import Home from "./Home/Home"


function App() {
const[valor, setValor] = useState(0);

function handleClick(){
  setValor(valor + 1);
}


  return (
    <>
    <p>O valor é {valor}</p>
    <button onClick={handleClick}>Adicionar + 1</button>

    <Home />
    </>
  );

      /*<Home
      title="Componente Home"
      description="Este é um componente que recebe props"
    />
    */
}

export default App
