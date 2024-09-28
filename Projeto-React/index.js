import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ListarProdutosPage from './ListarProdutosPage';
import CadastroProdutoPage from './CadastroProdutoPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/produtos" element={<ListarProdutosPage />} />
<Route path="/cadastrar" element={<CadastroProdutoPage />} />
<Route path="/editar/:id" element={<CadastroProdutoPage />} />
</Routes>
</BrowserRouter>
</React.StrictMode>
);