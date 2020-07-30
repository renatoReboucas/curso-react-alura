import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props){

  return(
    <nav>
      <div className="nav-wrapper indigo lighten-2">
        <a href="/" className="brand-logo">Casa do Código</a>
        <ul className="right">
          <li><Link to="/autores">Autores</Link></li>
          <li><Link to="/livros">Livros</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </div>
    </nav>
  )
}
