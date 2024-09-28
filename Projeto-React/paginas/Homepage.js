import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Gestão de Produtos</h1>
      <ul>
        <li><Link to="/produtos">Listar Produtos</Link></li>
        <li><Link to="/cadastrar">Cadastrar Produto</Link></li>
      </ul>
    </div>
  );
}
