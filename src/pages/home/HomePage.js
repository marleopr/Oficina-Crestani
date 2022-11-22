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
import Footer from '../../components/Footer/Footer';

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
                        <li><a href="#" title="Home">Home</a></li>
                        <li><a href="#" title="Sobre">Sobre</a></li>
                        <li><a href="#" title="Produtos">Produtos</a></li>
                        <li><a href="#" title="Contato">Contato</a></li>

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

            {/* <footer class="main_footer container">

                <div class="content">
                    <div class="colfooter">

                        <h3 class="titleFooter"> Menu</h3>

                        <ul>

                            <li><a href="#" title="Página Inícial">Página Inícial</a></li>
                            <li><a href="#" title="Sobre a Empresa">Sobre a Empresa</a></li>
                            <li><a href="#" title="Galeria de Fotos">Galeria de Fotos</a></li>
                            <li><a href="#" title="Fale Conosco">Fale Conosco</a></li>

                        </ul>
                    </div>
                    <div class="colfooter">

                        <h3 class="titleFooter"> Contato</h3>
                        <s.Contato>
                            <p><i class="icon icon-mail"> <s.LogoContato src={mailLogo}></s.LogoContato></i> irmaoscrestani@hotmail.com</p>
                            <p><i class="icon icon-phone"> <s.LogoContato src={phoneLogo}></s.LogoContato></i> (55) 3255-1263</p>
                            <p><i class="icon icon-whatsapp"> <s.LogoContato src={whatsappLogo}></s.LogoContato></i> (55) 99929-3552</p>
                        </s.Contato>
                    </div>
                    <div class="colfooter">

                        <h3 class="titleFooter"> Redes Sociais</h3>
                        <div>
                            <div></div>
                        </div>
                        <s.Socials>
                            <a a href="https://www.facebook.com/oficinacrestani" target="_blank"><s.LogoSocials src={facebookLogo}></s.LogoSocials></a>
                            <a a href="https://www.instagram.com/oficinacrestani" target="_blank"><s.LogoSocials src={instagramLogo}></s.LogoSocials></a>
                            <a a href="https://www.youtube.com/channel/UCFNHGEwfVmVRRVB9QssriPA" target="_blank"><s.LogoSocials src={youtubeLogo}></s.LogoSocials></a>
                            <a a href="https://api.whatsapp.com/send/?phone=5555999164755&text=Ola&type=phone_number&app_absent=0" target="_blank"><s.LogoSocials src={whatsappLogo}></s.LogoSocials></a>
                        </s.Socials>
                    </div>
                    <div class="clear"></div>

                </div>
                <div class="main_footer_copy">

                    <p class="m-b-footer"> Oficina Crestani - 2023, todos os direitos reservados.</p>
                    <p class="by"><i class="icon icon-heart-3"></i> Desenvolvido por: <a href="#" title="Seu nome">Márleo Piber</a></p>

                </div>
            </footer> */}

            <Footer />

            {/* </s.Footer> */}
        </s.Body>
    )
}