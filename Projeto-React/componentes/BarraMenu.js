import React from 'react';
import { Link } from 'react-router-dom';

export default function BarraMenu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Listar Produtos</Link></li>
        <li><Link to="/cadastrar">Cadastrar Produto</Link></li>
      </ul>
    </nav>
  );
}
