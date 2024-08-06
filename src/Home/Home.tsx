//import React from 'react';
//import '.Home.css';
import {useState, useEffect} from 'react';


const Home = () => {
  const  [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if(completed === true) {
      setTarefa('Parabéns! Você concluiu a tarefa!')
    }

  },[completed])

  return(
    <>
    <h1>Tarefa</h1>
    <h3>{tarefa}</h3>
    <p>Conclua a tarefa</p>
    <button onClick={() => setCompleted(true)}>Conluir tarefa</button>
    </>
  )
}

/*
interface minhaProps {
  title: string;
  description: string;
}

function Home(props:minhaProps) {
  return (
    <>
    <h2>{props.title}</h2>
    <h2>{props.description}</h2>
    </>
  );
}
  */

export default Home
