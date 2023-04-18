import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  min-height: 60vh;
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
`

export const HomeRight = styled.div``

export const SpanSentence = styled.span`
  width: 3px;
  height: 42px;
  background-color: white;
  display: inline-block;
  position: relative;
  top: 3px;
  animation: blink 0.6s infinite alternate;
`

export const SpanCursor = styled.span``

export const Button = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
`

export const LikedinButton = styled.div`
  
`

export const GithubButton = styled.div`
  
`