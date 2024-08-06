import './Card.css'


interface CardProps{
    titulo: string
    descricao: string
}

//Desestruturação é a forma mais adequada
function Card({titulo, descricao} : CardProps) {
    return (
        <div className="card">
            <h1>{ titulo }</h1>
            <p>{ descricao }</p>
        </div>
    )
}

/*

Outra forma de fazer
function Card(props: CardProps) {
    return (
        <div className="card">
            <h1>{ props.titulo }</h1>
            <p>{ props.descricao }</p>
        </div>
    )
}
*/

export default Card