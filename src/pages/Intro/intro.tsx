import React from 'react';
import './intro.css';

const Introduction: React.FC = () => {
  return (
    <div>
    <div className="intro-container">
      <h2 className="text-2xl font-bold mb-6 text-[#003366]">Quem somos</h2>
      <p>
        Somos um grupo de estudantes da Universidade de Brasília (UNB) dedicados a desenvolver soluções inovadoras no campo da tecnologia. Nosso projeto de Engenharia de Produto de Software (EPS) resume-se na criação de um meio que aproxime as empresas dos projetos desenvolvidos pelos estudantes.
      </p>
      <p>
        Nossa equipe é composta por estudantes de engenharia de software da Faculdade do Gama (FGA). Estamos unidos em nosso compromisso de simplificar a criação de pitch dos inúmeros projetos criados no nosso campus.
      </p>
      <p>
        Nosso objetivo é de contribuir com um sistema que aproxime investidores das tecnologias desenvolvidas por estudantes e que podem render bons frutos e negócios. Estamos ansiosos para enfrentar os desafios do projeto e fazer uma diferença positiva na vida das pessoas.
      </p>
      <div className="unb-logo">
        <img src="https://asmetro.org.br/portalsn/wp-content/uploads/2016/11/UnB.png" alt="UnB Logo" />
      </div>
    </div>
    </div>
  );
};

export default Introduction;
