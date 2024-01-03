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
export const Mapa = styled.div`
    width: 50vw;
    /* border: solid blue; */
    /* box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19); */
    margin: 10px;
    @media screen and (max-device-width : 480px){
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    }
`

export const ContatoMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 40vw;
  /* border: solid orange; */
  @media screen and (max-device-width : 480px){
    width: 100vw;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* flex-wrap: wrap; */
  }
`


export const ContatoText = styled.div`
  /* border: solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* flex-wrap: wrap; */
  width: 50vw;
  align-items: center;
  text-align: center;
  font-size: larger;
  font-weight: bold;
  font-size: 32px;
  margin-top: 10px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  p{
    font-size: 16px;
    margin-top: 20px;
  }
  @media screen and (max-device-width : 480px){
    width: 95vw;
    font-size: 24px;
  }
`

export const ContatoSocials = styled.div`
    /* border: solid blue; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 10px;

    /* flex-wrap: wrap; */
    width: 50vw;
    img{
      width: 100px;
      margin: 5px;
      :hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	  }
  }
  @media screen and (max-device-width : 480px){
    width: 100vw;
    img{
      width: 64px;
      margin: 5px;
    }
  }
`

export const LogoSocials = styled.img`
    width: 150px;
`
