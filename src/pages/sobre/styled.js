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
    flex-direction: column; */
    display: flex;
    justify-content: center;
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

export const CarouselStyle = styled.div`
  /* border: solid orange; */
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  width: 100vw;
  /* height: 50vh; */
`