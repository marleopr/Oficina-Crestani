import React from "react"
import '../../App.css';

import * as s from "./Styled"
import mailLogo from "../../assets/img/mail.png"
import phoneLogo from "../../assets/img/phone.png"
import facebookLogo from "../../assets/img/facebook.png"
import instagramLogo from "../../assets/img/instagram.png"
import youtubeLogo from "../../assets/img/youtube.png"
import whatsappLogo from "../../assets/img/whatsapp.png"
// import styled from "styled-components"

export default () => {

    <footer class="main_footer container">

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
    </footer>
}