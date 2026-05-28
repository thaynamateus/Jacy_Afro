import { useState, useEffect } from "react"
import style from "../css/Comentarios.module.css"
import perfil from "../assets/perfil.svg"

function Comentarios() {
    const [comentarios, setComentarios] = useState([])
    const [texto, setTexto] = useState("")
    const [estrelas, setEstrelas] = useState(0)
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState(null)
    const [fotoComentario, setFotoComentario] = useState(null)

    useEffect(() => {
        const salvos = JSON.parse(localStorage.getItem("comentarios")) || []
        setComentarios(salvos)
    }, [])

    function handleFotoPerfil(e) {
        const arquivo = e.target.files[0]
        if (!arquivo) return
        const leitor = new FileReader()
        leitor.onload = () => setFoto(leitor.result)
        leitor.readAsDataURL(arquivo)
    }

    function handleFotoComentario(e) {
        const arquivo = e.target.files[0]
        if (!arquivo) return
        const leitor = new FileReader()
        leitor.onload = () => setFotoComentario(leitor.result)
        leitor.readAsDataURL(arquivo)
    }

    function salvar() {
        if (!texto.trim() || estrelas === 0 || !nome.trim()) return

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
        setNome("")
        setFoto(null)
        setFotoComentario(null)
    }

    return (
        <section className={style.secao}>

            {/* Card para escrever */}
            <div className={style.caixa_escrever}>
                <div className={style.cabecalho}>
                    <label className={style.foto_perfil} htmlFor="upload_foto">
                        {foto
                            ? <img src={foto} alt="Foto" className={style.icone_perfil} />
                            : <img src={perfil} alt="Perfil" className={style.icone_perfil} />
                        }
                    </label>
                    <input
                        id="upload_foto"
                        type="file"
                        accept="image/*"
                        onChange={handleFotoPerfil}
                        className={style.input_escondido}
                    />
                    <input
                        type="text"
                        placeholder="Seu nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        className={style.campo_nome}
                    />
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
                    placeholder="Adicione seu comentario"
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

            {/* Comentários salvos */}
            <div className={style.lista}>
                {comentarios.map(c => (
                    <div key={c.id} className={style.caixa_comentario}>
                        <div className={style.cabecalho}>
                            <span className={style.foto_perfil}>
                                <img
                                    src={c.foto || perfil}
                                    alt="Perfil"
                                    className={style.icone_perfil}
                                />
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
                            <img
                                src={c.fotoComentario}
                                alt="foto do comentario"
                                className={style.foto_postada}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Comentarios