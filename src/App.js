import React, {useState} from 'react';

import './App.css';
import 'jquery/dist/jquery'
import 'materialize-css/dist/css/materialize.min.css'



import Tabela from './components/Tabela'
import Formulario from './components/Formulario'
import Header from './components/Header'

function App() {

  const  [autores, setAutores] = useState([
    {
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },
    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },
    {
      nome: 'Renato',
      livro: 'Design',
      preco: '150'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    },
  ]);

  function removeAutor(index){
    // const {autores} = autores

    setAutores(
      autores.filter( (autor, posAtual) => {
        // console.log("autores:", autor);
        // console.log("posAtual:", posAtual);
        // console.log("index", index);
        return posAtual !== index;
      } )
    )
  }

  function escutadorSubmit(autor){
    console.log("novoAutor:", autor);
    // console.log(autores, autor);
    setAutores(autores => [...autores,autor])
    // setAutores(autores => ({...autores,autor}))
  }

  return (
    <>
      <Header />
      <div className="container mb-10">
        <h1>Casa do Código</h1>
      <Tabela autores={autores} removeAutor={removeAutor} />
      <br/>
      <Formulario escutadorSubmit={escutadorSubmit} />
      </div>
    </>
  );
}

export default App;
