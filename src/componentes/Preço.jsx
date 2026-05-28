import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import style from "../css/Preco.module.css";

function Preco() {

  const location = useLocation();
  const trancaEscolhida = location.state?.tranca;

  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

  const tabelaPrecos = {
    "Box Braids": [
      { id: "b1", tamanho: "Chanel",  preco: 220, material: 280 },
      { id: "b2", tamanho: "Sutiã",   preco: 250, material: 300 },
      { id: "b3", tamanho: "Cintura", preco: 310, material: 380 },
      { id: "b4", tamanho: "Quadril", preco: 360, material: 420 },
    ],
    "Boxeadora": [
      { id: "bx1", tamanho: "Tradicional Curta", preco: 60, material: 100 },
    ],
    "Ponytail Braids": [
      { id: "p1", tamanho: "Padrão", preco: 120, material: 200 },
    ],
    "Gypsy Braids": [
      { id: "g1", tamanho: "Sutiã",   preco: 280, material: 360 },
      { id: "g2", tamanho: "Quadril", preco: 320, material: 400 },
    ],
    "Nagô": [
      { id: "n1", tamanho: "Meia Cabeça", preco: 110, material: 170 },
    ],
    "Croche Braids": [
      { id: "c1", tamanho: "Padrão", preco: 150, material: 210 },
    ],
    "Tiara": [
      { id: "t1", tamanho: "Simples", preco: 45, material: 45 },
    ],
    "Tranças com Miçangas": [
      { id: "m1", tamanho: "Chanel", preco: 130, material: 200 },
      { id: "m2", tamanho: "Sutiã",  preco: 170, material: 240 },
    ],
  };

  const opcoesDisponiveis = tabelaPrecos[trancaEscolhida] || [];

  return (
    <div className={style.wrapperPagina}>

      <section className={style.containerTamanhos}>
        <h3>
          Tamanho para: <span className={style.nomeTranca}>{trancaEscolhida || "Não selecionada"}</span>
        </h3>

        {opcoesDisponiveis.length > 0 ? (
          <div className={style.gridTamanhos}>
            {opcoesDisponiveis.map((opcao) => {
              const isSelected = tamanhoSelecionado?.id === opcao.id;
              return (
                <div
                  key={opcao.id}
                  className={`${style.cardTamanho} ${isSelected ? style.cardSelecionado : ""}`}
                  onClick={() => setTamanhoSelecionado(opcao)}
                >
                  <h4>{opcao.tamanho}</h4>
                  <p>R$ {opcao.preco.toFixed(2)}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className={style.erroAviso}>
            Por favor, volte à tela anterior e selecione um estilo de trança.
          </p>
        )}
      </section>

      <div className={style.barraPreco}>
        <h4>Total do serviço:</h4>
        <h5>
          {tamanhoSelecionado
            ? `R$ ${tamanhoSelecionado.preco.toFixed(2)}`
            : "R$ --"}
        </h5>
      </div>

      <div className={style.containerBotoes}>
        <Link to="/Agendar" className={style.botaoVoltar}>
          Voltar
        </Link>

        <Link
          to="/Agendar/cor"
          state={{
            tranca: trancaEscolhida,
            tamanho: tamanhoSelecionado?.tamanho,
            preco: tamanhoSelecionado?.preco,
            material: tamanhoSelecionado?.material,
          }}
          className={`${style.botaoProximo} ${!tamanhoSelecionado ? style.botaoDesabilitado : ""}`}
          onClick={(e) => {
            if (!tamanhoSelecionado) e.preventDefault();
          }}
        >
          Próximo
        </Link>
      </div>

    </div>
  );
}

export default Preco;