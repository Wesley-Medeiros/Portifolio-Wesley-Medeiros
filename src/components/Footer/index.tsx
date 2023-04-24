import heart from '../../assets/heart.png'
import { FooterContainer } from './style'

function Footer() {
  return(
    <FooterContainer>
      
        <p>Desenvolvido com muito <img src={heart} alt="Ícone de coração"/> por</p><a href="https://www.linkedin.com/in/wesley-medeiros-694809196/" target="_blank"><span> Wesley Medeiros</span></a>
      
    </FooterContainer>

  )
}

export default Footer