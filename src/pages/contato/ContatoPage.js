import React from 'react';
import "../../App.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../App.css';
import * as s from "./styled";
import facebookLogo from "../../assets/img/facebook.png"
import instagramLogo from "../../assets/img/instagram.png"
import youtubeLogo from "../../assets/img/youtube.png"
import whatsappLogo from "../../assets/img/whatsapp.png"
import MapPage from '../../components/Maps/MapPage.tsx';
export const REACT_APP_GOOGLE_API_KEY = "AIzaSyCU7jwnmpsmZJjgTW3xbj424S9G5SL_1-M";

export default function ContatoPage() {

    return (
        <s.Body>
            <s.Main>
                <s.Mapa>
                    <MapPage />
                </s.Mapa>
                <s.ContatoMain>
                    <s.ContatoText>
                        Visite-nos na nossa loja física e redes sociais:
                        <p>
                            Rua Matias Velho, 10 - Centro, Jaguari - RS, 97760-000 <br />
                            Segunda a sexta-feira: 07:30 - 12:00 (manhã) 13:30 - 18:00 (tarde) <br />
                            Sábado: 07:30 - 12:00
                        </p>
                    </s.ContatoText>
                    <s.ContatoSocials>
                        <a a href="https://www.facebook.com/oficinacrestani" target="blank" title='Facebook'><s.LogoSocials src={facebookLogo}></s.LogoSocials></a>
                        <a a href="https://www.instagram.com/oficinacrestani" target="blank" title='Instagram'><s.LogoSocials src={instagramLogo}></s.LogoSocials></a>
                        <a a href="https://www.youtube.com/channel/UCFNHGEwfVmVRRVB9QssriPA" target="blank" title='YouTube'><s.LogoSocials src={youtubeLogo}></s.LogoSocials></a>
                        <a a href="https://api.whatsapp.com/send/?phone=5555999164755&text=Ola&type=phone_number&app_absent=0" target="blank" title='WhatsApp'><s.LogoSocials src={whatsappLogo}></s.LogoSocials></a>
                    </s.ContatoSocials>
                </s.ContatoMain>
            </s.Main>
        </s.Body>
    )
}