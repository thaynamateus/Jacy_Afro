import { useLocation, Link } from "react-router-dom";
import style from "../css/Resumo.module.css";

function Resumo() {

  const location = useLocation();
  const { tranca, tamanho, cor, preco, data, horario, pagamento } = location.state || {};

  const nomesPagamento = {
    credito: "Cartão de Crédito",
    debito:  "Cartão de Débito",
    pix:     "Pix",
  };

  const adicionarAgenda = () => {
    const titulo = `Jacy Afro Studio - ${tranca}`;
    const detalhes = `Tamanho: ${tamanho} | Cor: ${cor} | Pagamento: ${nomesPagamento[pagamento]}`;
    const local = "Rua Julio Parigot, 1053, São Paulo";

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(detalhes)}&location=${encodeURIComponent(local)}`;

    window.open(url, "_blank");
  };

  return (
    <div className={style.wrapperPagina}>

      <section className={style.containerResumo}>

        <div className={style.linhaServico}>
          <span>{tranca || "--"}</span>
          <span>{tamanho || "--"}</span>
          <span>{cor || "--"}</span>
        </div>

        <div className={style.separador} />

        <div className={style.infoItem}>
          <span className={style.infoLabel}>como pagou</span>
          <span className={style.infoValor}>{nomesPagamento[pagamento] || "--"}</span>
        </div>

        <div className={style.separador} />

        <div className={style.infoItem}>
          <span className={style.infoLabel}>local</span>
          <span className={style.infoValor}>Rua Julio Parigot, 1053, São Paulo</span>
        </div>

        <div className={style.separador} />

        <div className={style.infoItem}>
          <span className={style.infoLabel}>data</span>
          <span className={style.infoValor}>{data} às {horario}</span>
        </div>

        <div className={style.separador} />

        <div className={style.infoItem}>
          <span className={style.infoLabel}>total</span>
          <span className={style.infoValor}>{preco ? `R$ ${preco.toFixed(2)}` : "--"}</span>
        </div>

      </section>

      <div className={style.containerBotao}>
        <Link to="/" className={style.botaoVoltar}>
          voltar para home
        </Link>
        <button onClick={adicionarAgenda} className={style.botaoAgenda}>
          adicionar a agenda
        </button>
      </div>

    </div>
  );
}

export default Resumo;