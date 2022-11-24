import styled from "styled-components"

export const Body = styled.div`
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    align-items: center;
    background-color:#f6f8fa;
    background-size:16px 16px;
    `

export const Main = styled.div`
    /* border: solid blue; */
    width: 90vw;
    display: flex;
    flex-direction: row;
    @media screen and (max-device-width : 480px){
    width: 100vw;
    display: flex;
    flex-direction: column;
    }
`
export const SobreText = styled.div`
    /* border: solid blue; */
    /* width: 100vw;
    display: flex;
    flex-direction: column; */
    align-items: center;
    text-align: justify;
    font-size: large;
    margin: 20px;
    color: rgba(10,61,34,1);
`

export const SobreFoto = styled.img`
    /* border: solid blue; */
    width: 40vw;
    display: flex;
    flex-direction: column;
    margin: 20px;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
    @media screen and (max-device-width : 480px){
    width: 95vw;
    }
`

// HEADER

export const Header = styled.div`
    background-color:#24292f;
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
`

export const Logo = styled.img`
    width: 70px;
    /* cursor: pointer; */
`

export const CarouselStyle = styled.div`
  /* border: solid orange; */
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  width: 100vw;
  /* height: 50vh; */
`

// FOOTER

export const Footer = styled.div`
    background-color:#24292f;
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const Endereco = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* border: solid green; */
`

export const LogoSocials = styled.img`
    width: 150px;
`
export const Contato = styled.div`
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

export const ContatoP = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const LogoContato = styled.img`
      /* width: 150px; */
  `

export const Socials = styled.div`
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

export const TextFooter = styled.div`
    color: white;
    margin-left: 10px;
    font-weight: bold;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }
`