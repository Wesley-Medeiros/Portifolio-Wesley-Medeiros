import { useState } from "react"
import { HeaderContainer } from "./styles"
import { Link } from "react-scroll"
import MenuMobile from "../MenuMobile"

function Header() { 

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  

  return(
    <HeaderContainer>
      <nav>
        <p><Link to="home" spy={true} smooth={true} offset={50} duration={500}>&lsaquo;WM/&rsaquo;</Link></p>
        <MenuMobile />
        <ul>
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          <li>Home</li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <li>Sobre</li>
          </Link>
          <Link to="technologies" spy={true} smooth={true} offset={50} duration={500}>
          <li>Tecnologias</li>
          </Link>
        </ul>
      </nav>
  </HeaderContainer>
  )
}

export default Header