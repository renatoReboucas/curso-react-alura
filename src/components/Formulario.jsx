import React, {useState } from 'react';

import FormValidator from '../FormValidator'
import validator from 'validator';
import PopUp from '../PopUp'
// import { Container } from './styles';


export default function Formulario(props) {

  // this.validator = new FormValidator()
  const validator = new FormValidator([
    {
      campo: 'nome',
      metodo: 'isEmpty',
      validoQuando: false,
      mensagem: 'Entre com um nome'
    },
    {
      campo: 'livro',
      metodo: 'isEmpty',
      validoQuando: false,
      mensagem: 'Entre com um livro'
    },
    {
      campo: 'preco',
      metodo: 'isInt',
      args: [{ min: 0, max: 99999 }],
      validoQuando: true,
      mensagem: 'Entre com um valor numerico'
    },
  ])
  
  const [nome, setNome] = useState('')
  const [livro, setLivro] = useState('')
  const [preco, setPreco] = useState('')


  function submitForm(){
    const data = {
      nome,
      livro,
      preco,
      validacao: validator.valido()
    }

    const validacao = validator.valida(data)

    if(validacao.isValid){
      props.escutadorSubmit(data)
      setPreco('')
      setLivro('')
      setNome('')
    }else{
      const {nome, livro, preco} = validacao
      const campos = [nome, livro, preco]

      const camposInvalidos = campos.filter(elem => {
        return elem.isInvalid
      })

      camposInvalidos.forEach(campo =>{
        PopUp.exibeMensagem('error', campo.mensagem)
      } );

    }

  }

  return (
    <form>
      <div className="row">
        <div className="input-field col 4">
          <label className="input-field" htmlFor="nome">Nome</label>
          <input
            className="validate"
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <div className="input-field col 4">
          <label className="input-field" htmlFor="livro">Livro</label>
          <input
            className="validate"
            id="livro"
            type="text"
            name="livro"
            value={livro}
            onChange={e => setLivro(e.target.value)}
          />
        </div>
        <div className="input-field col 4">
          <label className="input-field" htmlFor="preco">Preço</label>
          <input
            className="validate"
            id="preco"
            type="text"
            name="preco"
            value={preco}
            onChange={e => setPreco(e.target.value)}
          />
        </div>
      </div>
      <div className="input-field col 4">
        <button onClick={submitForm} type="button" className="waves-effect waves-light indigo lighten-2 btn">Salvar</button>
      </div>
    </form>

  )
}

