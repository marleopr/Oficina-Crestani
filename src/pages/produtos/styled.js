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

// export const Header = styled.div`
//     background-color:#24292f;
//     width: 100vw;
//     box-sizing: border-box;
//     overflow-x: hidden;
// `

export const Logo = styled.img`
    width: 70px;
    align-items: center;
    /* border: solid green; */
    :hover{
        cursor: pointer;
    }
    `
// export const SwiperStyle = styled.div`
//   border: solid orange;
//   width: 50vw;
//   height: 30vh;
// `

export const MainCards = styled.div`
  border: solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  /* max-width: 100vw; */
  /* width: 100vw; */
  
  
  /* margin: 100px; */
  /* box-sizing: border-box; */
  /* overflow-x: hidden; */
  
  @media screen and (max-device-width : 480px){
      /* border: 2px solid blue; */
      /* width: 100vw; */
    }
    `

export const TituloCards = styled.div`
    text-align: center;
    margin: 10px;
    border: solid red;
    h3{
        font-size: 24px;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);    
        margin-bottom: 5px;
    }   
    
    `
    
export const ContainerCards = styled.div`
    border: solid red;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px; 
    .card {
        max-height: 50px;
    }
`;

export const CardProdutos = styled.div`
    border: 2px solid blue;
    /* background-color: #484848; */

    width: 300px;
    margin: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);

    background:
    radial-gradient(black 15%, transparent 16%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
    background-color:#282828;
    background-size:16px 16px;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);

    /* @media screen and (max-device-width : 480px){
    width: 150px;
    height: 250px;
    } */
`

export const PosterPath = styled.img`
    /* border: 2px solid violet; */
    width: 220px;
    height: 220px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
    /* @media screen and (max-device-width : 480px){
    width: 150px;
    height: 150px;
    } */
`

export const ImagesPoster = styled.div`
    /* border: 2px solid black; */
    box-sizing: border-box;
    height: 300px; 
    display: flex;
    justify-content: center;
    /* @media screen and (max-device-width : 480px){ */
    /* width: 150px; */
    /* height: 150px; */
    /* } */
`

export const Title = styled.p`
    color: #FFFFFF;
    font-family:'Arial Narrow Bold', sans-serif;
    text-align: center;
    :hover{
        cursor: default;
    }
`

export const VoltarAoTopo = styled.div`
    position: fixed;
    bottom: 75px;
    font-size: 50px;
    color: black;
    :hover{
            cursor: pointer;
        }
`

export const ContainerPaginator = styled.div`
  margin: 20px;
`;