import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListarProdutosPage() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    const resposta = await axios.get('https://app-api-tapwm.onrender.com/api/produtos');
    setProdutos(resposta.data);
  };

  const excluirProduto = async (id) => {
    await axios.delete(`https://app-api-tapwm.onrender.com/api/produtos/${id}`);
    carregarProdutos();
  };

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <Link to="/cadastrar">Cadastrar Novo Produto</Link>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <strong>{produto.nome}</strong> - R${produto.preco}
            <button onClick={() => excluirProduto(produto.id)}>Excluir</button>
            <Link to={`/editar/${produto.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
