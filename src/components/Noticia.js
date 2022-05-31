
function Noticia(){

    const noticia ={
        titulo : "Titulo de una noticia",
        descripcion : "Esta es la descripcion de una noticia"

    }
    const {titulo, descripcion} = noticia 

    return (
        <div className="mi-clase">
            <h1 className='mi-titulo'>Mi noticia: {titulo} </h1>
            <p className='mi-descripcion'>Mi noticia: {descripcion}</p>
        </div>
    )

}

export default Noticia;