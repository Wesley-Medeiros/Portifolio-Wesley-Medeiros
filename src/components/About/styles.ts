import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  min-height: 60vh;
  padding: 6.5%;
  background-color: #151515;


  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`

export const Svg = styled.div`
  min-width: 300px;
  
  img {
    border-left: 5px solid #00d2df;
    transition: 0.4s;   
}
`

export const DescriptionContainer =styled.div`
  line-height: 1.5rem;
  width: 70%;
  margin-top: 2rem;
  
`

export const AboutButtons =styled.div` 
  display: flex;
  width: 350px;
  justify-content: space-between;

  img {
    width: 22px;
  }

  div {
    display: flex;
    align-items: center;
    padding: 3px 5px 5px;
    justify-content: space-evenly;
    width: 140px;
    border: 2px solid #00d2df;
    border-radius: 8px;
    position: relative;
    background-color: #121212;
    margin-top: 1rem;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 1.5px;
    height: 40px; 
  }

  div:hover {
    background-color: #272727;
    text-shadow: 1px 1px 3px #00bbc5;
  }
`