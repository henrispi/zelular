import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { produtos } from './data/produtos';
import ProdutoDetalhes from './ProdutoDetalhes';
import Footer from './components/Footer';
import './App.css';

// Movemos a vitrine para um componente interno para organizar
const Vitrine = ({ busca, setBusca, categoriaAtiva, setCategoriaAtiva, produtosFiltrados }) => (
  <div className="zelular-container">
    <input 
      className="search-box"
      placeholder="Buscar acessório..." 
      value={busca}
      onChange={(e) => setBusca(e.target.value)} 
    />

    <div className="filtros-lista">
      {['Todos', 'Capas', 'Carregadores', 'Áudio'].map(cat => (
        <button 
          key={cat}
          className={`btn-filtro ${categoriaAtiva === cat ? 'active' : ''}`}
          onClick={() => setCategoriaAtiva(cat)}
        >
          {cat}
        </button>
      ))}
    </div>

    <div className="grid-acessorios">
      {produtosFiltrados.map(prod => (
        <div key={prod.id} className="card">
          <Link to={`/produto/${prod.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={prod.imagem} alt={prod.nome} />
            <h3>{prod.nome}</h3>
            <span className="preco">R$ {prod.preco}</span>
          </Link>
          <a href={prod.link} className="btn-link" target="_blank" rel="noreferrer">Ver na Amazon</a>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [busca, setBusca] = useState('');

  const produtosFiltrados = produtos.filter(produto => {
    const matchesCategoria = categoriaAtiva === 'Todos' || produto.categoria === categoriaAtiva;
    const matchesBusca = produto.nome.toLowerCase().includes(busca.toLowerCase());
    return matchesCategoria && matchesBusca;
  });

 return (
    <Router>
      <div className="zelular-app">
        <nav className="navbar">
          <Link to="/" style={{textDecoration: 'none'}}><h1 className="logo">Zelular</h1></Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <Vitrine 
              busca={busca} setBusca={setBusca} 
              categoriaAtiva={categoriaAtiva} setCategoriaAtiva={setCategoriaAtiva} 
              produtosFiltrados={produtosFiltrados} 
            />
          } />
          <Route path="/produto/:id" element={<ProdutoDetalhes />} />
        </Routes>

        {/* O PASSO QUE FALTAVA: */}
        <Footer /> 

      </div>
    </Router>
  );
}

export default App;