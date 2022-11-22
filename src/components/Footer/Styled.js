import styled from "styled-components"

export const Footer = styled.div`
    background-color:#24292f;
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const LogoSocials = styled.img`
    width: 150px;
`

export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  img{
    width: 16px;
    margin-right: 5px;  
  }
  
  p{
    align-items: center;
    
  }
  `

export const LogoContato = styled.img`
/* width: 150px; */
`

export const Socials = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    img{
    width: 24px;
    margin: 5px;
  }
`