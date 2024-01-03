import styled from "styled-components";
import mailLogo from "../../assets/img/mail.png"
import phoneLogo from "../../assets/img/phone.png"
import facebookLogo from "../../assets/img/facebook.png"
import instagramLogo from "../../assets/img/instagram.png"
import youtubeLogo from "../../assets/img/youtube.png"
import whatsappLogo from "../../assets/img/whatsapp.png"

const Footer = () => {
    return (
        <Main >

                <footer class="main_footer container">

                    <div class="content">
                        <div class="colfooter">

                            <Endereco>

                                <h3 class="titleFooter"> Endereço e atendimento</h3>
                            </Endereco>

                            <ul>
                                <div>
                                    {/* <h3>Endereço:</h3> */}
                                    <br />
                                    Rua Matias Velho, 10 - Centro, Jaguari - RS, 97760-000
                                </div>
                                <br />
                                <div>
                                    {/* <h3>Atendimento:</h3> */}
                                    Segunda a sexta-feira: 07:30 - 12:00 (manhã) 13:30 - 18:00 (tarde)
                                    <br />
                                    <br />
                                    Sábado: 07:30 - 12:00
                                </div>
                            </ul>
                        </div>
                        <div class="colfooter">

                            <h3 class="titleFooter"> Contato</h3>
                            <Contato>
                                <ContatoP><i class="icon icon-mail"> <LogoContato src={mailLogo}></LogoContato></i> irmaoscrestani@hotmail.com</ContatoP>
                                <ContatoP><i class="icon icon-phone"> <LogoContato src={phoneLogo}></LogoContato></i> (55) 3255-1263</ContatoP>
                                <ContatoP><i class="icon icon-whatsapp"> <LogoContato src={whatsappLogo}></LogoContato></i> (55) 99929-3552</ContatoP>
                            </Contato>
                        </div>
                        <div class="colfooter">

                            <h3 class="titleFooter"> Redes Sociais</h3>
                            <div>
                                <div></div>
                            </div>
                            <Socials>
                                <a a href="https://www.facebook.com/oficinacrestani" target="blank" title='Facebook'><LogoSocials src={facebookLogo}></LogoSocials></a>
                                <a a href="https://www.instagram.com/oficinacrestani" target="blank" title='Instagram'><LogoSocials src={instagramLogo}></LogoSocials></a>
                                <a a href="https://www.youtube.com/channel/UCFNHGEwfVmVRRVB9QssriPA" target="blank" title='YouTube'><LogoSocials src={youtubeLogo}></LogoSocials></a>
                                <a a href="https://api.whatsapp.com/send/?phone=5555999164755&text=Ola&type=phone_number&app_absent=0" target="blank" title='WhatsApp'><LogoSocials src={whatsappLogo}></LogoSocials></a>
                            </Socials>
                        </div>
                        <div class="clear"></div>

                    </div>
                    <div class="main_footer_copy">

                        <p class="m-b-footer"> Oficina Crestani - 2023, todos os direitos reservado</p>
                        <p class="by"><i class="icon icon-heart-3"></i> Desenvolvido por: <a href="https://marleo-portfolio.vercel.app" target="blank" title="Márleo Piber Full Stack Developer">Márleo Piber</a></p>

                    </div>
                </footer>


            </Main>
    )
}
export default Footer;

const Main = styled.div`
    background-color:#24292f;
    width: 100vw;
    /* height: 100vh; */
    box-sizing: border-box;
    /* overflow-x: hidden; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
    /* border: solid green; */

`

const Endereco = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* border: solid green; */
`

const LogoSocials = styled.img`
    width: 150px;
`
const Contato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
  /* font-weight: bold; */
  img{

      width: 24px;
    margin-right: 5px;  
  }
  
  p{
    align-items: center;

  }
  `

const ContatoP = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const LogoContato = styled.img`
      /* width: 150px; */
  `

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
      img{
      width: 32px;
      margin: 5px;
      :hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
    }
`