import styled from "styled-components"
import OficinaLogo from "../../assets/img/oficina-logo.png"

const Header = () => {
    return (
        <header className="header">
            <div className="content">
                <a href="/" className="logo">
                    <Logo src={OficinaLogo}></Logo></a>

                <input className="mobile-btn" type="checkbox" id="mobile-btn" />
                <label className="mobile-icon" for="mobile-btn"><span className="hamburguer"></span></label>

                <ul className="nav">
                    <li><a href="/" title="Home">Home</a></li>
                    <li><a href="/produtos" title="Produtos">Produtos</a></li>
                    {/* <li><a href="/produtos" title="Produtos"></a>Produtos</li> */}
                    {/* <li><option>Produtos</option></li> */}
                    {/* <li onClick={() => goToProdutosPage(navigate)}><a href="#" title="Produtos">Produtos</a></li> */}
                    <li><a href="sobre" title="Sobre">Sobre</a></li>
                    <li><a href="contato" title="Contato">Contato</a></li>

                </ul>
            </div>
        </header>
    )
}
export default Header


// const Header = styled.div`
//     background-color:#24292f;
//     width: 100vw;
//     box-sizing: border-box;
//     overflow-x: hidden;
// `

const Logo = styled.img`
    width: 70px;
    /* cursor: pointer; */
`