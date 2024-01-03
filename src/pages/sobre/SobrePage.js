import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../App.css';
import * as s from "./styled";
import sobreCrestani from "../../assets/img/Sobre.jpg"

const SobrePage = () => {

    return (
        <s.Body>
            <s.Main>
                <s.SobreText>
                    A Oficina Crestani está cada vez mais próxima dos seus clientes, estreitando laços, alinhando relacionamentos e fazendo amigos. Seja na lavoura, dentro da empresa e até mesmo na internet e redes sociais.  São 35 anos de uma caminhada cheia de grandes desafios, que sem dúvidas motivaram essa empresa a se superar diante de cada um deles.
                    <br />
                    <br />
                    A proximidade com nossos clientes nos proporciona a capacidade de entender as suas necessidades e trabalhar incansavelmente para atendê-las, temos muito orgulho e convicção de dizer que não vendemos apenas peças e serviços, entregamos também comodidade, agilidade, qualidade, transparência  e confiança.  É muito satisfatório ver o plantio, a colheita, trabalhadores e máquinas trabalhando juntos produzindo o nosso alimento e do mundo todo, e isso nos move.
                    <br />
                    <br />
                    A equipe é nota 10! Muito comprometida, dedicada e constantemente treinada, é a garantia de um excelente atendimento e serviços de qualidade. Com os investimentos focados em atender as necessidades de você agricultor e (ou) pecuarista, podemos garantir uma empresa cada vez mais completa, e nosso relacionamento cada dia melhor.
                </s.SobreText>
                <s.SobreFoto src={sobreCrestani} />
            </s.Main>
        </s.Body>
    )
}
export default SobrePage