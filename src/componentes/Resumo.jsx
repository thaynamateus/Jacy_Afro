import { useLocation, Link } from "react-router-dom";
import style from "../css/Resumo.module.css";
import whats1 from "../assets/whats1.svg"

function Resumo() {

  const location = useLocation();
  const { tranca, tamanho, cor, preco, data, horario, pagamento } = location.state || {};

  const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario") || "{}");
  const nomeUsuario = dadosUsuario.nome || "";

  const nomesPagamento = {
    credito: "Cartão de Crédito",
    debito: "Cartão de Débito",
    pix: "Pix",
  };

  const adicionarAgenda = () => {
    const titulo = `Jacy Afro Studio - ${tranca}`;
    const detalhes = `Tamanho: ${tamanho} | Cor: ${cor} | Pagamento: ${nomesPagamento[pagamento]}`;
    const local = "Rua Julio Parigot, 1053, São Paulo";

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(detalhes)}&location=${encodeURIComponent(local)}`;

    window.open(url, "_blank");
  };

  const abrirWhatsapp = () => {
    const numero = "5511981413285";

    const mensagem =
      `Olá! Meu nome é ${nomeUsuario}. Acabei de fazer um agendamento:

Serviço: ${tranca}
Tamanho: ${tamanho}
Cor: ${cor}
Data: ${data} às ${horario}
Pagamento: ${nomesPagamento[pagamento]}
Total: R$ ${preco?.toFixed(2)}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section className={style.pai_resumo}>

      <section className={style.container_resumo}>

        <div className={style.tranca}>
          <h4>{tranca || "--"}</h4>
          <h5>{tamanho || "--"}</h5>
          <h5>{cor || "--"}</h5>
        </div>

        <div className={style.separador} />

        <div className={style.info_itens}>
          <h5 className={style.info_texto}>como pagou</h5>
          <h5 className={style.info_texto2}>{nomesPagamento[pagamento] || "--"}</h5>
        </div>

        <div className={style.separador} />

        <div className={style.info_itens}>
          <h5 className={style.info_texto}>local</h5>
          <h5 className={style.info_texto2}>Rua Julio Parigot, 1053, São Paulo</h5>
        </div>

        <div className={style.separador} />

        <div className={style.info_item}>
          <h5 className={style.info_texto}>data</h5>
          <h5 className={style.info_texto2}>{data} às {horario}</h5>
        </div>

        <div className={style.separador} />

        <div className={style.info_item}>
          <h5 className={style.info_texto}>total</h5>
          <h5 className={style.info_texto2}>{preco ? `R$ ${preco.toFixed(2)}` : "--"}</h5>
        </div>

      </section>

      <div className={style.botao_resumo}>
        <button onClick={abrirWhatsapp} className={style.whats}>
          Concluir agendamento <img src={whats1} alt="whatsapp" />
        </button>
        <Link to="/" className={style.voltar}>
          voltar para home
        </Link>

        <button onClick={adicionarAgenda} className={style.agenda}>
          adicionar a agenda
        </button>
      </div>

    </section>
  );
}

export default Resumo;