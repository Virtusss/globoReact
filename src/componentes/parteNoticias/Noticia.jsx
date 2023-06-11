import './noticia.css'

export default (props) => {
    return (
        <div className="Noticia">
            <div className="Imagem"><img src={props.imagem} alt="" width={300} height={300}/></div>
            <div className="Titulo">{props.titulo}</div>
            <div className="Texto"><li>{props.texto}</li></div>
        </div>
    )
}