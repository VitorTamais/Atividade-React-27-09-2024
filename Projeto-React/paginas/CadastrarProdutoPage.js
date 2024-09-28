import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
export default function CadastroProdutoPage() {
 const { id } = useParams();
 const [produto, setProduto] = useState({ nome: '', preco: '', descricao: '' });
 const navigate = useNavigate();
 useEffect(() => {
   if (id) {
     carregarProduto();
   }
 }, [id]);
 const carregarProduto = async () => {
   const resposta = await axios.get(`https://app-api-tapwm.onrender.com/api/produtos/${id}`);
   setProduto(resposta.data);
 };
 const salvarProduto = async (e) => {
   e.preventDefault();
   if (id) {
     await axios.put(`https://app-api-tapwm.onrender.com/api/produtos/${id}`, produto);
   } else {
     await axios.post('https://app-api-tapwm.onrender.com/api/produtos', produto);
   }
   navigate('/produtos');
 };
 return (
<div>
<h2>{id ? 'Editar Produto' : 'Cadastrar Produto'}</h2>
<form onSubmit={salvarProduto}>
<label>Nome:</label>
<input
         type="text"
         value={produto.nome}
         onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
       />
<br />
<label>Preço:</label>
<input
         type="text"
         value={produto.preco}
         onChange={(e) => setProduto({ ...produto, preco: e.target.value })}
       />
<br />
<label>Descrição:</label>
<input
         type="text"
         value={produto.descricao}
         onChange={(e) => setProduto({ ...produto, descricao: e.target.value })}
       />
<br />
<button type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>
</form>
</div>
 );
}