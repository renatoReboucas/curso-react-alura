import React from 'react'
import {Link} from 'react-router-dom'

import LinkWrapper from './LinkWrapper'

export default function Header(props){

  return(
    <nav>
      <div className="nav-wrapper indigo lighten-2">
        <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Casa do Código</LinkWrapper>
        <ul className="right">
          <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
          <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
          <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
        </ul>
      </div>
    </nav>
  )
}
