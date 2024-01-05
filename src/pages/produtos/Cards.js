import React from "react";
import * as s from "./styled";
import PropTypes from "prop-types";

const Cards = ({ produto }) => {
    return (
        <s.MainCards>
            <s.CardProdutos>
                <s.ImagesPoster>
                    <a
                        href={produto.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <s.PosterPath src={produto.image} alt={produto.title} />
                    </a>
                </s.ImagesPoster>
                <s.Title>
                    {produto.title} <br /> {produto.description}
                </s.Title>
            </s.CardProdutos>
        </s.MainCards>
    );
}

Cards.propTypes = {
    produto: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        whatsappLink: PropTypes.string.isRequired,
    }).isRequired,
};
export default Cards;

// import React from "react"
// import * as s from "./styled"
// import OficinaLogo from "../../assets/img/oficina-logo.png"
// import produto1 from "../../assets/cards/tratometro-01803-1.jpg"
// import produto2 from "../../assets/cards/acoplamentoborrachaagco-01292-1.jpeg"
// import produto3 from "../../assets/cards/adesivovedaflangeseroscas-semissecativo-16467-1.png"

// export function Cards() {

//     return (
//         <s.MainCards>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <a href="https://api.whatsapp.com/send/?phone=5555999164755&text=Olá Poderia me passar o orçamento do Tratômetro Código: 189383 Marca: PA/VDO?&type=phone_number&app_absent=0"target="blank"><s.PosterPath src={produto1}></s.PosterPath></a>
//                 </s.ImagesPoster>
//                 <s.Title>
//                 Tratômetro <br/> Código: 189383 <br/> Marca: PA/VDO
//                 </s.Title>
//             </s.CardProdutos>

//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <a href="https://api.whatsapp.com/send/?phone=5555999164755&text=Olá Poderia me passar o orçamento do Acoplamento de Borracha Código: 1480921 Marca: AGCO?&type=phone_number&app_absent=0"target="blank"><s.PosterPath src={produto2}></s.PosterPath></a>
//                 </s.ImagesPoster>
//                 <s.Title>
//                 Acoplamento de Borracha <br/> Código: 1480921 <br/> Marca: AGCO
//                 </s.Title>
//             </s.CardProdutos>
            
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <a href="https://api.whatsapp.com/send/?phone=5555999164755&text=Olá Poderia me passar o orçamento do Adesivo Veda Flanges e Roscas? Vedante líquido, semi secativo, 100g Marca: TEKBOND&type=phone_number&app_absent=0"target="blank"><s.PosterPath src={produto3}></s.PosterPath></a>
//                 </s.ImagesPoster>
//                 <s.Title>
//                 Adesivo Veda Flanges e Roscas <br/> Vedante líquido, semi secativo, 100g <br/> Marca: TEKBOND
//                 </s.Title>
//             </s.CardProdutos>

//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 4
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 5
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 6
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 7
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 8
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 9
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 10
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 11
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 12
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 13
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 14
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 15
//                 </s.Title>
//             </s.CardProdutos>
//             <s.CardProdutos>
//                 <s.ImagesPoster>
//                     <s.PosterPath src={OficinaLogo} />
//                 </s.ImagesPoster>
//                 <s.Title>
//                     Produto número 16
//                 </s.Title>
//             </s.CardProdutos>
//         </s.MainCards>
//     )
// }