import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { produtos } from './data/produtos';

const ProdutoDetalhes = () => {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === parseInt(id));

  if (!produto) {
    return <div className="zelular-container"><h2>Produto não encontrado!</h2></div>;
  }

  return (
    <div className="zelular-container">
      <Link to="/" style={{ color: 'var(--primary)', marginBottom: '20px', display: 'block' }}>
        ← Voltar para a loja
      </Link>
      
      <div className="detalhes-flex">
        <div className="detalhes-imagem">
          <img src={produto.imagem} alt={produto.nome} />
        </div>
        
        <div className="detalhes-info">
          <span>{produto.categoria}</span>
          <h1>{produto.nome}</h1>
          <p className="preco">R$ {produto.preco}</p>
          <p className="descricao">
            Este acessório foi selecionado pela <strong>Zelular</strong> por sua alta qualidade e compatibilidade garantida. 
            Ao comprar pelo link abaixo, você garante o menor preço na Amazon.
          </p>
          <a href={produto.link} target="_blank" rel="noreferrer" className="btn-link" style={{fontSize: '1.2rem'}}>
            Comprar Agora na Amazon
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDetalhes;