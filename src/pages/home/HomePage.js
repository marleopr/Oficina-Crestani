import React, { Component } from 'react';
import { render } from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../../App.css';
import { useNavigate } from "react-router-dom"
import * as s from "./styled";
import OficinaLogo from "../../assets/img/oficina-logo.png"
// import githubFooter from "../../assets/img/githubLogoSocials.png"
import mailLogo from "../../assets/img/mail.png"
import phoneLogo from "../../assets/img/phone.png"
import facebookLogo from "../../assets/img/facebook.png"
import instagramLogo from "../../assets/img/instagram.png"
import youtubeLogo from "../../assets/img/youtube.png"
import whatsappLogo from "../../assets/img/whatsapp.png"
import Carousel from '../../components/Carousel/Carousel';
// import Footer from '../../components/Footer/Footer';
import { goToProdutosPage } from '../../routes/coordinator';

// import { goToHistoricPage } from "../../routes/coordinator";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <s.Body>
            {/* <s.Header>
                <s.Logo src={OficinaLogo}></s.Logo>
            </s.Header> */}

            <header class="header">
                <div class="content">
                    <a href="#" target="_blank" class="logo"></a>
                    <s.Logo src={OficinaLogo}></s.Logo>

                    <input class="mobile-btn" type="checkbox" id="mobile-btn" />
                    <label class="mobile-icon" for="mobile-btn"><span class="hamburguer"></span></label>

                    <ul class="nav">
                        {/* <li><a href="#" title="Home">Home</a></li> */}
                        {/* <li ><a href="produtos" title="Produtos"></a>Produtos</li> */}
                        <li ><a href="produtos" title="Produtos">Produtos</a></li>
                        {/* <li onClick={() => goToProdutosPage(navigate)}><a href="#" title="Produtos">Produtos</a></li> */}
                        <li><a href="sobre" title="Sobre">Sobre</a></li>
                        <li><a href="contato" title="Contato">Contato</a></li>

                    </ul>
                </div>
            </header>

            <s.CarouselStyle>
                <Carousel />
            </s.CarouselStyle>

            {/* <s.Footer> */}
            {/* <s.LogoFooter src={OficinaLogo}></s.LogoFooter>
                <s.TextFooter>
                    Oficina Crestani
                    </s.TextFooter> */}


            <s.Footer >

                <footer class="main_footer container">

                    <div class="content">
                        <div class="colfooter">

                            <s.Endereco>

                                <h3 class="titleFooter"> Endere??o e atendimento</h3>
                            </s.Endereco>

                            <ul>
                                <div>
                                    {/* <h3>Endere??o:</h3> */}
                                    <br />
                                    Rua Matias Velho, 10 - Centro, Jaguari - RS, 97760-000
                                </div>
                                <br />
                                <div>
                                    {/* <h3>Atendimento:</h3> */}
                                    Segunda a sexta-feira: 07:30 - 12:00 (manh??) 13:30 - 18:00 (tarde)
                                    <br />
                                    <br />
                                    S??bado: 07:30 - 12:00
                                </div>
                            </ul>
                        </div>
                        <div class="colfooter">

                            <h3 class="titleFooter"> Contato</h3>
                            <s.Contato>
                                <s.ContatoP><i class="icon icon-mail"> <s.LogoContato src={mailLogo}></s.LogoContato></i> irmaoscrestani@hotmail.com</s.ContatoP>
                                <s.ContatoP><i class="icon icon-phone"> <s.LogoContato src={phoneLogo}></s.LogoContato></i> (55) 3255-1263</s.ContatoP>
                                <s.ContatoP><i class="icon icon-whatsapp"> <s.LogoContato src={whatsappLogo}></s.LogoContato></i> (55) 99929-3552</s.ContatoP>
                            </s.Contato>
                        </div>
                        <div class="colfooter">

                            <h3 class="titleFooter"> Redes Sociais</h3>
                            <div>
                                <div></div>
                            </div>
                            <s.Socials>
                                <a a href="https://www.facebook.com/oficinacrestani" target="_blank" title='Facebook'><s.LogoSocials src={facebookLogo}></s.LogoSocials></a>
                                <a a href="https://www.instagram.com/oficinacrestani" target="_blank" title='Instagram'><s.LogoSocials src={instagramLogo}></s.LogoSocials></a>
                                <a a href="https://www.youtube.com/channel/UCFNHGEwfVmVRRVB9QssriPA" target="_blank" title='YouTube'><s.LogoSocials src={youtubeLogo}></s.LogoSocials></a>
                                <a a href="https://api.whatsapp.com/send/?phone=5555999164755&text=Ola&type=phone_number&app_absent=0" target="_blank" title='WhatsApp'><s.LogoSocials src={whatsappLogo}></s.LogoSocials></a>
                            </s.Socials>
                        </div>
                        <div class="clear"></div>

                    </div>
                    <div class="main_footer_copy">

                        <p class="m-b-footer"> Oficina Crestani - 2023, todos os direitos reservados.</p>
                        <p class="by"><i class="icon icon-heart-3"></i> Desenvolvido por: <a href="https://marleo-portfolio.vercel.app" target="_blank" title="M??rleo Piber Full Stack Developer">M??rleo Piber</a></p>

                    </div>
                </footer>


            </s.Footer>
        </s.Body >
    )
}