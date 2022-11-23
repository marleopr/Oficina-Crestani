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

export const CardMovies = styled.div`
    /* border: 2px solid red; */
    width: 300px;
    margin: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    /* justify-content:center; */
`

export const PosterPath = styled.img`
    /* border: 2px solid violet; */
    width: 300px;
    height: 400px;
    box-sizing: border-box;
    &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
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