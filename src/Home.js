import React, { useState } from 'react';
import { produtos } from '../data/produtos';

const Home = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  // Filtra os produtos com base na categoria clicada
  const produtosFiltrados = categoriaAtiva === 'Todos' 
    ? produtos 
    : produtos.filter(p => p.categoria === categoriaAtiva);

  return (
    <div className="container">
      <section className="filtros">
        {['Todos', 'Carregadores', 'Capas', 'Áudio'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setCategoriaAtiva(cat)}
            className={categoriaAtiva === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </section>

      <div className="product-grid">
        {produtosFiltrados.map(prod => (
          <div key={prod.id} className="product-card">
            <img src={prod.imagem} alt={prod.nome} />
            <span>{prod.categoria}</span>
            <h3>{prod.nome}</h3>
            <p className="price">R$ {prod.preco}</p>
            <a href={prod.link} target="_blank" rel="noopener noreferrer" className="btn-amazon">
              Comprar na Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;