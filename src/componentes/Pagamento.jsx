import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import style from "../css/Pagamento.module.css";

function Pagamento() {

  const location = useLocation();
  const { tranca, tamanho, cor, preco, data, horario } = location.state || {};

  const [pagamentoSelecionado, setPagamentoSelecionado] = useState(null);

  const metodos = [
    { id: "credito", label: "Cartão de Crédito" },
    { id: "debito",  label: "Cartão de Débito" },
    { id: "pix",     label: "Pix"},
  ];

  return (
    <div className={style.wrapperPagina}>

      <div className={style.barraPreco}>
        <h4>Total do serviço:</h4>
        <h5>{preco ? `R$ ${preco.toFixed(2)}` : "R$ --"}</h5>
      </div>

      <section className={style.containerPagamento}>
        <h3>Método de Pagamento</h3>

        <div className={style.listaPagamentos}>
          {metodos.map((metodo) => {
            const isSelected = pagamentoSelecionado === metodo.id;
            return (
              <div
                key={metodo.id}
                className={`${style.cardPagamento} ${isSelected ? style.cardSelecionado : ""}`}
                onClick={() => setPagamentoSelecionado(metodo.id)}
              >
                <span className={style.icone}>{metodo.icone}</span>
                <span className={style.labelPagamento}>{metodo.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <div className={style.containerBotao}>
        <Link
          to="/Agendar/resumo"
          state={{ tranca, tamanho, cor, preco, data, horario, pagamento: pagamentoSelecionado }}
          className={`${style.botaoFinalizar} ${!pagamentoSelecionado ? style.botaoDesabilitado : ""}`}
          onClick={(e) => {
            if (!pagamentoSelecionado) e.preventDefault();
          }}
        >
          Finalizar o Pagamento
        </Link>
      </div>

    </div>
  );
}

export default Pagamento;