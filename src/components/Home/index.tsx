import { MainButton, HomeContainer, HomeLeft, SpanCursor, SpanSentence, HomeRight, AboutContainer, Svg, DescriptionContainer, AboutButtons } from "./styles"
import  linkedin  from "../../assets/linkedin.png"
import  github  from "../../assets/github.png"
import DevCoding from "../../assets/illustration-coding.svg"
import Profile from "../../assets/illustration-profile.svg"
import curriculum from "../../assets/Currículo Wesley Medeiros.pdf"
import cloud from "../../assets/download-da-nuvem.png"
import email from "../../assets/email.png"

function Home() {
  return(
  <>
    <HomeContainer>
       <HomeLeft >
          <h1>Olá, eu sou</h1>
            <SpanSentence></SpanSentence>
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
    <AboutContainer>
    <Svg>
      <img src={Profile} alt="Uma foto de Wesley Medeiros" />
    </Svg>
    <DescriptionContainer>
      <h1>Sobre mim</h1>
      <h2>Recife, Pernambuco</h2>
      <p>
        Olá! Eu sou um estudante de ADS em busca de aprendizado e crescimento que está sempre disposto
        a fazer o possível para garantir sucesso em seus objetivos. Atualmente com foco na
        expansão de conhecimentos em atuações de projetos ligados a desenvolvimento Front End.
      </p>
      <AboutButtons>
        <a href={curriculum} download="">
          <div >
            <img src={cloud} alt="" />
            <p>Currículo</p>
          </div>
        </a>
        <a
          href="mailto: wmedeiros.dev@gmail.com?subject=Wesley, vim pelo seu portfólio! :)"
          target="_blank"
        >
          <div>
            <img src={email} alt="" />
            <p>E-mail</p>
          </div>
        </a>
      </AboutButtons>
      
    </DescriptionContainer>
    </AboutContainer>
    </>
  )
}

export default Home