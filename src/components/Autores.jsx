import React, { useState } from 'react'

import Header from './Header'
import DataTable from './DataTable';

export default function Autores(props) {

  const [autores, setAutores] = useState([
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
  const titulo = 'Autores'

  return (
    <>
      <Header />
      <div className='container'>
        <h1>Página de Autores</h1>
        <DataTable dados={autores} titulo={titulo} colunas={['nome']} />
      </div>
    </>
  )
}
