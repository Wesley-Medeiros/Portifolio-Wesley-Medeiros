import { TechnologiesCard, TechnologiesContainer, TechnologiesGrid } from "./styles"
import { DiHtml5, DiCss3, DiJavascript, DiReact, } from 'react-icons/di';
import { SiTypescript } from 'react-icons/Si';

interface Props {
  tech: any
}

const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
  { id: 'javascript', name: 'JavaScript',icon: <DiJavascript /> },
  { id: 'react', name: 'React', icon: <DiReact /> },
  { id: 'typescript', name: 'TypeScript', icon: <SiTypescript /> }
]

function Technologies({ tech }:Props) {
  return(
    <TechnologiesContainer>
    <h1>Tecnoligias</h1>
    <div>
      <div>
        <ul>
          <li>Experiêcias</li>
          <li>Dominio</li>
          <li>Estudando</li>
        </ul>
      </div>
    <div>
      <div>
        <h2>Em busca da minha primeira experiência oficial.</h2>
        <p>Estou disponível para bater um papo, você pode entrar em contato via e-mail wmedeiros.dev@gmail.com</p>
      </div>
    <div>
      <h2>Tecnologias estudadas</h2>
      <TechnologiesGrid>
        
      
      </TechnologiesGrid>
      </div>
    <div>
      <h2>Ainda estudando</h2>
      <span></span>
      <p></p>
      <p>
        
      </p>
    </div>
  </div>
</div>
</TechnologiesContainer>
  )
}

export default Technologies