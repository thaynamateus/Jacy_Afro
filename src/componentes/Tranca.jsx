import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/Tranca.module.css";

function Tranca() {
  const [trancaSelecionada, setTrancaSelecionada] = useState(null);

  const listaTrancas = [
    "Box Braids", "Boxeadora",
    "Ponytail Braids", "Gypsy Braids",
    "Nagô", "Croche Braids",
    "Tiara", "Tranças com Miçangas"
  ];

  return (
    <div className={style.wrapperPagina}>
      
      <section className={style.containerTrancas}>
        <h3>Escolha sua trança</h3>

        <div className={style.gridTrancas}>
          {listaTrancas.map((nomeTranca, index) => {
            const isSelected = trancaSelecionada === nomeTranca;
            return (
              <div
                key={index}
                className={`${style.cardTranca} ${isSelected ? style.cardSelecionado : ""}`}
                onClick={() => setTrancaSelecionada(nomeTranca)}
              >
                <h4>{nomeTranca}</h4>
              </div>
            );
          })}
        </div>
      </section>

      <div className={style.barraPreco}>
        <h4>Total do serviço:</h4>
        <h5>R$ --</h5>
      </div>

      <div className={style.containerBotao}>
        <Link 
          to="/Agendar/preco"
          state={{ tranca: trancaSelecionada }}
          className={`${style.botaoProximo} ${!trancaSelecionada ? style.botaoDesabilitado : ""}`}
          onClick={(e) => {
            if (!trancaSelecionada) e.preventDefault();
          }}
        >
          Próximo
        </Link>
      </div>

    </div>
  );
}

export default Tranca;