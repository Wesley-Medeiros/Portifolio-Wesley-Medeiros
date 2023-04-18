import { Button, GithubButton, HomeContainer, HomeLeft, LikedinButton, SpanCursor, SpanSentence } from "./styles"
import  linkedin  from "../../assets/linkedin.png"
import  github  from "../../assets/github.png"

function Home() {
  return(
    <HomeContainer>
       <HomeLeft >
          <h1>Olá, eu sou</h1>
            <SpanSentence></SpanSentence>
            <SpanCursor></SpanCursor>
          <h1>Desenvolvedora Front-End</h1>
          <Button>
            <a href="https://www.linkedin.com/in/wesley-medeiros-694809196/" target="_blank">
              <LikedinButton>
                <img src={linkedin} alt="" />
                <p>LinkedIn</p>
              </LikedinButton>
            </a>
            <a href="https://github.com/Wesley-Medeiros" target="_blank">
              <GithubButton>
                <img src={github} alt="" />
                <p>Github</p>
              </GithubButton>
            </a>
          </Button>
        </HomeLeft>
    </HomeContainer>
  )
}

export default Home