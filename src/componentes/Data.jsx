import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import style from "../css/Data.module.css";

function Data() {

  const location = useLocation();
  const { tranca, tamanho, cor, preco } = location.state || {};

  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

  const horarios = [
    "08:00",
    "10:30",
    "13:30",
    "15:30",
  ];

  const datasOcupadas = ["15/6/2025", "20/6/2025"];
  const horariosOcupados = ["10:30"];

  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth();
  const totalDias = new Date(ano, mes + 1, 0).getDate();
  const primeiroDia = new Date(ano, mes, 1).getDay();

  const nomeMes = hoje.toLocaleString("pt-BR", { month: "long", year: "numeric" });

  const podeProsseguir = dataSelecionada && horarioSelecionado;

  return (
    <div className={style.wrapperPagina}>

      <section className={style.containerData}>
        <h3>Data e horário</h3>

        <div className={style.conteudo}>

          <div className={style.calendario}>
            <p className={style.nomeMes}>{nomeMes}</p>

            <div className={style.gridDias}>
              {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
                <span key={i} className={style.diaSemana}>{d}</span>
              ))}

              {Array.from({ length: primeiroDia }).map((_, i) => (
                <span key={`vazio-${i}`} />
              ))}

              {Array.from({ length: totalDias }).map((_, i) => {
                const dia = i + 1;
                const dataFormatada = `${dia}/${mes + 1}/${ano}`;
                const isSelected = dataSelecionada === dataFormatada;
                const isPast = dia < hoje.getDate();
                const isOcupado = datasOcupadas.includes(dataFormatada);

                return (
                  <div
                    key={dia}
                    className={`
                      ${style.dia}
                      ${isSelected ? style.diaSelecionado : ""}
                      ${isPast ? style.diaPassado : ""}
                      ${isOcupado ? style.diaOcupado : ""}
                    `}
                    onClick={() => {
                      if (!isPast && !isOcupado) {
                        setDataSelecionada(dataFormatada);
                        setHorarioSelecionado(null);
                      }
                    }}
                  >
                    {dia}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={style.gridHorarios}>
            {horarios.map((horario) => {
              const isSelected = horarioSelecionado === horario;
              const isOcupado = horariosOcupados.includes(horario);
              return (
                <div
                  key={horario}
                  className={`
                    ${style.cardHorario}
                    ${isSelected ? style.cardSelecionado : ""}
                    ${isOcupado ? style.cardOcupado : ""}
                  `}
                  onClick={() => !isOcupado && setHorarioSelecionado(horario)}
                >
                  {horario}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <div className={style.barraPreco}>
        <h4>Total do serviço:</h4>
        <h5>{preco ? `R$ ${preco.toFixed(2)}` : "R$ --"}</h5>
      </div>

      <div className={style.containerBotoes}>
        <Link to="/Agendar/cor" className={style.botaoVoltar}>
          Voltar
        </Link>

        <Link
          to="/Agendar/pagamento"
          state={{ tranca, tamanho, cor, preco, data: dataSelecionada, horario: horarioSelecionado }}
          className={`${style.botaoProximo} ${!podeProsseguir ? style.botaoDesabilitado : ""}`}
          onClick={(e) => {
            if (!podeProsseguir) e.preventDefault();
          }}
        >
          agendar
        </Link>
      </div>

    </div>
  );
}

export default Data;