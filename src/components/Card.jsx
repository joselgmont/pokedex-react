import React from "react";

function Card(props){
    return(
        <div className="card">
          <div className="card-conteudo">
            <div className="card-titulo">
              <h2>{props.nome}</h2>
              <h2>{props.dexNum}</h2>
            </div>
            <div className="card-imagem">
              <img
                src={props.imagemCard}
                alt="card-imagem"
              />
              <div id="sombra"></div>
            </div>
            <div className="descricao">
              <p>
                {props.descricao}
              </p>
            </div>
          </div>
        </div>
    );
}

export default Card;