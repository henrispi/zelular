const Footer = () => {
  return (
    <footer className="footer">
      <div className="zelular-container">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="logo">Zelular</h2>
            <p>A melhor curadoria de acessórios para o seu smartphone.</p>
          </div>
          
          <div className="footer-section">
            <h3>Sobre Nós</h3>
            <p>Participamos do Programa de Associados da Amazon, um serviço de intermediação de vendas que ajuda sites a receberem comissões por links enviados para a Amazon.com.br.</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Zelular - Todos os direitos reservados.</p>
          <p className="amazon-disclaimer">
            * Como associado Amazon, a Zelular ganha sobre compras qualificadas. Os preços e a disponibilidade podem variar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;