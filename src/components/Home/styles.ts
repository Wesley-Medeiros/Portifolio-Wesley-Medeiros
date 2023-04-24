import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  min-height: 60vh;
  padding: 6.5%;

  @media (max-width: 1325px) {
    height: 35px;
    padding: 6.5%;

    h1 {
    font-size: 1rem;
  }

  span {
    font-size: 2.2rem;
  }

  @media (max-width: 880px) {
    padding: 22% 0;
    text-align: center;
    flex-direction: column;
    transition: .3s transform;
  }
}
`

export const HomeLeft = styled.div`
  width: 50%;
  margin: 5rem 0;

  h1 {
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 1.5rem 0;
}

span {
  font-size: 3rem;
  text-transform: uppercase;
  color: #00d2df;
  font-weight: 600;
  letter-spacing: 3px;
}

@media (max-width: 880px) {
  width: 90%;
  text-align: center;
  transition: .3s transform;
}
`

export const HomeRight = styled.div`
  width: 40%;
  margin: 32px 0;

  @media (max-width: 880px) {
    display: none;
  }
`

export const SpanSentence = styled.span`
  width: 3px;
  height: 42px;
  display: inline-block;
  position: relative;
  top: 3px;
  animation: blink 0.6s infinite alternate;

  @media (max-width: 880px) {
  width: 90%;
  text-align: center;
}
`
export const SpanCursor = styled.span``

export const MainButton = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;

  img {
    width: 22px;
  }

  a {
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
    transition: 0.3s;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 1.5px;
    height: 40px; 
  }

  a:hover {
    background-color: #272727;
    text-shadow: 1px 1px 3px #00bbc5;
  }

  @media (max-width: 880px) {
    width: 320px;
    margin: 1rem auto;
    transition: .3s transform;
}
  
`