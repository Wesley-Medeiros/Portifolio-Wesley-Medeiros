import { MouseEventHandler } from "react"
import { ButtonMenu, HeaderContainer } from "./styles"
import { Link } from "react-scroll"

function Header() { 
  return(
    <HeaderContainer>
    <header>
      <nav>
        <p><Link to="home" spy={true} smooth={true} offset={100} duration={500}>&lsaquo;WM/&rsaquo;</Link></p>
        <ButtonMenu></ButtonMenu>
        <ul>
          <Link to="home" spy={true} smooth={true} offset={100} duration={500}>
          <li>Home</li>
        </Link>
          <Link to="about" spy={true} smooth={true} offset={100} duration={500}>
            <li>Sobre</li>
          </Link>
          <Link to="technologies" spy={true} smooth={true} offset={100} duration={500}>
          <li>Tecnologias</li>
        </Link>
        </ul>
      </nav>
    </header>
  </HeaderContainer>
  )
}

export default Header