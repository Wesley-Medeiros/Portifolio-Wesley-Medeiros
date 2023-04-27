import  Profile from "../../assets/illustration-profile.svg"
import  curriculum  from "../../assets/Currículo Wesley Medeiros.pdf"
import Cloud from "../../assets/cloud.png"
import email from "../../assets/email.png"
import { AboutButtons, AboutContainer, DescriptionContainer, Svg } from "./styles"

function About() {
  return(
    <AboutContainer id="about">
    <Svg>
      <img src={Profile} alt="Uma foto de Wesley Medeiros" />
    </Svg>
    <DescriptionContainer>
      <h1>Sobre mim</h1>
      <h2>Recife, Pernambuco</h2>
      <p>
        Olá! Meu nome é Wesley Medeiros Ramalho, sou um estudante de ADS em busca de aprendizado e crescimento que está sempre disposto
        a fazer o possível para garantir sucesso em seus objetivos. Atualmente com foco na
        expansão de conhecimentos em atuações de projetos ligados a desenvolvimento Front End.
      </p>
      <AboutButtons>
        <a href={curriculum} download="">
          <div>
            <img src={Cloud} alt="" />
            <p>Currículo</p>
          </div>
        </a>
        <a
          href="mailto: wmedeiros.dev@gmail.com?subject=Wesley, vim pelo seu portfólio! :)"
          target="_blank">
          <div>
            <img src={email} alt="" />
            <p>E-mail</p>
          </div>
        </a>
      </AboutButtons>
      
    </DescriptionContainer>
    </AboutContainer>
  )
}

export default About