import { MainButton, HomeContainer, HomeLeft, SpanCursor, SpanSentence, HomeRight } from "./styles"
import  linkedin  from "../../assets/linkedin.png"
import  github  from "../../assets/github.png"
import DevCoding from "../../assets/illustration-coding.svg"

function Home() {
  return(
  <>
    <HomeContainer>
       <HomeLeft >
          <h1>Olá, eu sou</h1>
            <SpanSentence>Wesley</SpanSentence>
            <SpanCursor></SpanCursor>
          <h1>Desenvolvedor Front-End</h1>
          <MainButton>
            <a href="https://www.linkedin.com/in/wesley-medeiros-694809196/" target="_blank">
                <img src={linkedin} alt="" />
                <p>LinkedIn</p>
            </a>
            <a href="https://github.com/Wesley-Medeiros" target="_blank">
                <img src={github} alt="" />
                <p>Github</p>
            </a>
          </MainButton>
        </HomeLeft>
        <HomeRight>
          <img src={DevCoding} alt="Ilustração representando uma desenvolvedor sentada na cadeira mexendo no notebook com ambiente em volta." data-tilt/>
        </HomeRight> 
    </HomeContainer>
  </>
  )
}

export default Home