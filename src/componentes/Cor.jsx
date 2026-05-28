import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import style from "../css/Cor.module.css";

function Cor() {

  const location = useLocation();
  const { tranca, tamanho, preco, material } = location.state || {};

  const [corSelecionada, setCorSelecionada] = useState(null);
  const [levareiMaterial, setLevareiMaterial] = useState(false);

  const listaCores = [
    { id: "c1", nome: "Preto",    hex: "#1a1a1a" },
    { id: "c2", nome: "Castanho", hex: "#6b3a2a" },
    { id: "c3", nome: "Loiro",    hex: "#d4a843" },
    { id: "c4", nome: "Ruivo",    hex: "#8b2500" },
    { id: "c5", nome: "Vinho",    hex: "#5c0a2e" },
    { id: "c6", nome: "Azul",     hex: "#1a3a8b" },
    { id: "c7", nome: "Rosa",     hex: "#d45c8b" },
    { id: "c8", nome: "Degradê",  hex: "#a855f7" },
  ];

  // Se marcou que leva o material → preço base, senão → preço com material
  const precoFinal = levareiMaterial ? preco : material;

  const podeProsseguir = corSelecionada || levareiMaterial;

  return (
    <div className={style.wrapperPagina}>

      <section className={style.containerCores}>
        <h3>Cor</h3>

        <div className={style.gridCores}>
          {listaCores.map((cor) => {
            const isSelected = corSelecionada?.id === cor.id;
            return (
              <div
                key={cor.id}
                className={`${style.cardCor} ${isSelected ? style.cardSelecionado : ""}`}
                onClick={() => {
                  setCorSelecionada(cor);
                  setLevareiMaterial(false); // desmarca o botão se escolher cor
                }}
              >
                <div
                  className={style.bolinha}
                  style={{ backgroundColor: cor.hex }}
                />
                <span>{cor.nome}</span>
              </div>
            );
          })}
        </div>

        <button
          className={`${style.botaoMaterial} ${levareiMaterial ? style.botaoMaterialAtivo : ""}`}
          onClick={() => {
            setLevareiMaterial(!levareiMaterial);
            setCorSelecionada(null); // desmarca a cor se clicar em levarei o material
          }}
        >
          levarei o material
        </button>

      </section>

      <div className={style.barraPreco}>
        <h4>Total do serviço:</h4>
        <h5>{precoFinal ? `R$ ${precoFinal.toFixed(2)}` : "R$ --"}</h5>
      </div>

      <div className={style.containerBotoes}>
        <Link to="/Agendar/preco" className={style.botaoVoltar}>
          Voltar
        </Link>

        <Link
          to="/Agendar/data"
          state={{
            tranca,
            tamanho,
            cor: levareiMaterial ? "Material próprio" : corSelecionada?.nome,
            preco: precoFinal,
          }}
          className={`${style.botaoProximo} ${!podeProsseguir ? style.botaoDesabilitado : ""}`}
          onClick={(e) => {
            if (!podeProsseguir) e.preventDefault();
          }}
        >
          Próximo
        </Link>
      </div>

    </div>
  );
}

export default Cor;