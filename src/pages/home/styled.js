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

// FOOTER

// export const Footer = styled.div`
//     background-color:#24292f;
//     width: 100vw;
//     box-sizing: border-box;
//     overflow-x: hidden;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
// `

// export const LogoSocials = styled.img`
//     width: 150px;
// `
// export const Contato = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   img{
//     width: 16px;
//     margin-right: 5px;  
//   }
  
//   p{
//     align-items: center;
    
//   }
//   `

  // export const LogoContato = styled.img`
  //     /* width: 150px; */
  // `

// export const Socials = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: start;
//       img{
//       width: 24px;
//       margin: 5px;
//     }
// `

export const TextFooter = styled.div`
    color: white;
    margin-left: 10px;
    font-weight: bold;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }
`