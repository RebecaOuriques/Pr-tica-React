import { useState, useEffect } from 'react'
import './Task.css'

function Task() {

  const[finalizada, setFinalizada] = useState<boolean>(false);
  const[tarefa, setTarefa] = useState<string>(" Pendente")

//Função de Efeito Colateral
  useEffect(() => {
    if(finalizada === true) {
    setTarefa(" Concluída")
  }
  }, [finalizada])

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa:{tarefa} </h3>
        <button onClick={() => {setFinalizada(true)}}>
          Conclua a Tarefa</button>
    </div>
  )
}

export default Task