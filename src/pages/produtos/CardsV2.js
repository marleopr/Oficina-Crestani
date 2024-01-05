const CardsV2 = ({ produto }) => {
    return (
        <div className="card">
            <a
                href={produto.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="card-image" src={produto.image} alt={produto.title} />
            </a>
            <div className="category"> {produto.title} </div>
            <div className="heading"> {produto.description}
                <div className="author"> By <span className="name">Abi</span> 4 days ago</div>
            </div>
        </div>
    )
}
export default CardsV2;