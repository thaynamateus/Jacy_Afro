import { useState, useRef } from "react";
import style from "../css/Galeria.module.css";
import boxeadora from "../assets/boxeadora.jpg"
import chanel from "../assets/chanel.png"
import rabo from "../assets/rabo.png"
import nago from "../assets/nago.png"
import braids from "../assets/braids.png"
import croche from "../assets/croche.png"
import box from "../assets/box.png"
import coroa from "../assets/coroa.png"
import masculino from "../assets/masculino.png"
import micangas from "../assets/micangas.png"
import boxeadora1 from "../assets/boxeadora1.png"
import Comentario from "./Comentario"

const listaTrancas = [
    "Box Braids",
    "Boxeadora",
    "Ponytail Braids",
    "Gypsy Braids",
    "Nagô",
    "Croche Braids",
    "Tiara",
    "Tranças com Miçangas",
    "Chanel",
];

const fotosIniciais = [
    { id: 1, src: boxeadora, nome: "Boxeadora", categoria: "Boxeadora" },
    { id: 2, src: rabo, nome: "Ponytail Braids", categoria: "Ponytail Braids" },
    { id: 3, src: braids, nome: "Box Braids", categoria: "Box Braids" },
    { id: 4, src: chanel, nome: "Chanel", categoria: "Chanel" },
    { id: 5, src: nago, nome: "Nagô", categoria: "Nagô" },
    { id: 6, src: croche, nome: "Croche Braids", categoria: "Croche Braids" },
    { id: 7, src: boxeadora1, nome: "Boxeadora", categoria: "Boxeadora" },
    { id: 9, src: coroa, nome: "Tiara", categoria: "Tiara" },
    { id: 10, src: micangas, nome: "Tranças com Miçangas", categoria: "Tranças com Miçangas" },
    { id: 11, src: box, nome: "Gypsy Braids", categoria: "Gypsy Braids" },
];

function Galeria() {
    const [filtroAtivo, setFiltroAtivo] = useState("Todos");
    const [fotos, setFotos] = useState(fotosIniciais);
    const [modalAberto, setModalAberto] = useState(false);
    const [imagemPendente, setImagemPendente] = useState(null);
    const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
    const inputRef = useRef(null);

    const categorias = ["Todos", ...listaTrancas];

    const fotosFiltradas =
        filtroAtivo === "Todos"
            ? fotos
            : fotos.filter((f) => f.categoria === filtroAtivo);

    function handleArquivoSelecionado(e) {
        const arquivo = e.target.files[0];
        if (!arquivo) return;
        const url = URL.createObjectURL(arquivo);
        setImagemPendente(url);
        setCategoriaEscolhida("");
        setModalAberto(true);
        e.target.value = "";
    }

    function confirmarUpload() {
        if (!categoriaEscolhida) return;
        setFotos((prev) => [
            ...prev,
            {
                id: Date.now(),
                src: imagemPendente,
                nome: categoriaEscolhida,
                categoria: categoriaEscolhida,
            },
        ]);
        setModalAberto(false);
        setImagemPendente(null);
        setCategoriaEscolhida("");
    }

    function cancelarUpload() {
        setModalAberto(false);
        setImagemPendente(null);
        setCategoriaEscolhida("");
    }

    return (
        <>
            <section>
                <h2 className={style.titulo}>Galeria de Trabalho</h2>

                <div className={style.procurando}>
                    <div className={style.filtro}>
                        {categorias.map((cat) => (
                            <button
                                key={cat}
                                className={`${style.botao_filtro} ${filtroAtivo === cat ? style.ativo : ""}`}
                                onClick={() => setFiltroAtivo(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className={style.ulpgald_imagem}>
                        <button
                            className={style.btn_upload}
                            onClick={() => inputRef.current.click()}
                        >
                            ↑ Upload de Fotos
                        </button>
                        <input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleArquivoSelecionado}
                        />
                    </div>
                </div>

                <div className={style.conteiners_galeria}>
                    <div className={style.conteiner_produtos}>
                        {fotosFiltradas.length === 0 ? (
                            <p className={style.vazio}>
                                Nenhuma foto em "{filtroAtivo}" ainda.
                            </p>
                        ) : (
                            fotosFiltradas.map((foto) => (
                                <a key={foto.id} href="/galeria" className={style.card_produto}>
                                    <img src={foto.src} alt={foto.nome} />
                                    <div className={style.efeito}>
                                        <span>{foto.nome}</span>
                                    </div>
                                </a>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {modalAberto && (
                <div className={style.modal_fundo} onClick={cancelarUpload}>
                    <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                        <h3 className={style.modal_titulo}>Qual é o tipo de trança?</h3>

                        <div className={style.preview_wrapper}>
                            <img src={imagemPendente} alt="Preview" className={style.preview_img} />
                        </div>

                        <div className={style.lista_categorias}>
                            {listaTrancas.map((cat) => (
                                <button
                                    key={cat}
                                    className={`${style.botao_categoria} ${categoriaEscolhida === cat ? style.categoria_ativa : ""}`}
                                    onClick={() => setCategoriaEscolhida(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className={style.modal_acoes}>
                            <button className={style.btn_cancelar} onClick={cancelarUpload}>
                                Cancelar
                            </button>
                            <button
                                className={style.btn_confirmar}
                                onClick={confirmarUpload}
                                disabled={!categoriaEscolhida}
                            >
                                Adicionar à Galeria
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Comentario />
        </>
    );
}

export default Galeria;