import { useState, useEffect } from "react"
import style from "../css/Comentarios.module.css"
import perfilIcon from "../assets/perfil.svg"
import Comentario from "./Comentario"

function Comentarios() {
    const [comentarios, setComentarios] = useState([])
    const [texto, setTexto] = useState("")
    const [estrelas, setEstrelas] = useState(0)
    const [fotoComentario, setFotoComentario] = useState(null)

    const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario") || "{}")
    const nome = dadosUsuario.nome || ""
    const foto = dadosUsuario.foto || null

    useEffect(() => {
        const salvos = JSON.parse(localStorage.getItem("comentarios")) || []
        setComentarios(salvos)
    }, [])

    function handleFotoComentario(e) {
        const arquivo = e.target.files[0]
        if (!arquivo) return
        const leitor = new FileReader()
        leitor.onload = () => setFotoComentario(leitor.result)
        leitor.readAsDataURL(arquivo)
    }

    function salvar() {
        if (!texto.trim() || estrelas === 0) return

        const novo = {
            id: Date.now(),
            nome,
            texto,
            estrelas,
            foto,
            fotoComentario
        }

        const atualizados = [novo, ...comentarios]
        setComentarios(atualizados)
        localStorage.setItem("comentarios", JSON.stringify(atualizados))
        setTexto("")
        setEstrelas(0)
        setFotoComentario(null)
    }

    return (
        <section className={style.secao}>

            <div className={style.caixa_escrever}>
                <div className={style.cabecalho}>
                    {/* Foto vem do perfil automaticamente */}
                    <span className={style.foto_perfil}>
                        <img
                            src={foto || perfilIcon}
                            alt="Perfil"
                            className={style.icone_perfil}
                        />
                    </span>

                    <span className={style.campo_nome}>{nome || "Faça login para comentar"}</span>

                    <div className={style.notas}>
                        {[1, 2, 3, 4, 5].map(n => (
                            <span
                                key={n}
                                onClick={() => setEstrelas(n)}
                                className={n <= estrelas ? style.nota_cheia : style.nota_vazia}
                            >★</span>
                        ))}
                    </div>
                </div>

                <textarea
                    placeholder="Adicione seu comentário"
                    value={texto}
                    onChange={e => setTexto(e.target.value)}
                    className={style.campo_texto}
                />

                <label htmlFor="foto_comentario" className={style.botao_upload}>
                    Adicionar foto
                </label>
                <input
                    id="foto_comentario"
                    type="file"
                    accept="image/*"
                    onChange={handleFotoComentario}
                    className={style.input_escondido}
                />
                {fotoComentario && (
                    <div className={style.preview}>
                        <img src={fotoComentario} alt="preview" />
                        <span onClick={() => setFotoComentario(null)}>✕</span>
                    </div>
                )}

                <button onClick={salvar} className={style.botao_publicar}>Publicar</button>
            </div>

            <div className={style.lista}>
                {comentarios.map(c => (
                    <div key={c.id} className={style.caixa_comentario}>
                        <div className={style.cabecalho}>
                            <span className={style.foto_perfil}>
                                <img src={c.foto || perfilIcon} alt="Perfil" className={style.icone_perfil} />
                            </span>
                            <div>
                                <div className={style.notas_fixas}>
                                    {"★".repeat(c.estrelas)}{"☆".repeat(5 - c.estrelas)}
                                </div>
                                <span>{c.nome}</span>
                            </div>
                        </div>
                        <p>{c.texto}</p>
                        {c.fotoComentario && (
                            <img src={c.fotoComentario} alt="foto do comentario" className={style.foto_postada} />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Comentarios