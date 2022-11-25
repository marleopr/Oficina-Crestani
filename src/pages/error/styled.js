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

export const MainHeader = styled.div`
    /* border: solid orange; */
    width: 100vw;

`

export const Logo = styled.img`
    width: 70px;
    align-items: center;
    /* border: solid green; */
    :hover{
        cursor: pointer;
    }
`

export const MainCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  /* max-width: 100vw; */
  width: 100vw;
  
  /* margin: 100px; */
  /* box-sizing: border-box; */
  /* overflow-x: hidden; */

  /* border: 2px solid blue; */

`

export const CardMovies = styled.div`
    /* border: 2px solid red; */
    /* background-color: #484848; */

    width: 300px;
    margin: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    font-size: 32px;
    text-transform: uppercase;
    width: 100vw;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    @media screen and (max-device-width : 480px){
        font-size: 16px;
    }
    /* justify-content:center; */
`

export const PosterPath = styled.img`
    /* border: 2px solid violet; */
    /* width: 200px; */
    /* height: 300px; */
    box-sizing: border-box;
    width: 100vw;

`

export const ImagesPoster = styled.div`
    /* border: 2px solid black; */
    box-sizing: border-box;
    height: 400px; 
    display: flex;
    justify-content: center;
`

export const Title = styled.p`
    color: #FFFFFF;
    font-family:'Arial Narrow Bold', sans-serif;
    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
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