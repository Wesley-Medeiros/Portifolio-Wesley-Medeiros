import styled from 'styled-components'

export const DivContainer = styled.div`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
  }
`;

export const AboutContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundLight};
  padding: 5rem;
  min-height: 60vh;
  gap: 4rem;
  
  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  

  @media (max-width: 880px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 0;
  }
`

export const Svg = styled.div`
  min-width: 300px;
  margin-top: 3rem;
  
  img {
    border-left: 5px solid ${({ theme }) => theme.blue};
    transition: 0.4s;   
}

@media (max-width: 880px) {
  max-width: 80%;
  }
`

export const DescriptionContainer =styled.div`
  line-height: 1.5rem;
  width: 70%;
  margin-top: 2rem;


  @media (max-width: 880px) {
    width: 80%;
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 570px) {
    p {
      width: 100%;
    }
  }
  
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
    border: 2px solid ${({ theme }) => theme.blue};
    border-radius: 8px;
    position: relative;
    background-color: ${({ theme }) => theme.backgroundDark};
    margin-top: 1rem;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 1.5px;
    height: 40px; 
  }

  div:hover {
    background-color: #272727;
    text-shadow: 1px 1px 3px ${({ theme }) => theme.blue};
  }

  @media (max-width: 880px) {
    width: 320px;
    margin: 1rem auto;
  }
`