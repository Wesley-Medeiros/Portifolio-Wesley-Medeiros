
import { HeaderContainer } from "./styles"
import { Link } from "react-scroll"
import MenuMobile from "../MenuMobile"

function Header() { 

  const MenuItens = [
    {
      name: 'Home',
      link: 'home',
    },
    {
      name: 'Sobre',
      link: 'about',
    },
    {
      name: 'Tecnologias',
      link: 'technologies',
    },
  ];
  
  return(
    <HeaderContainer>
      <nav>
        <p><Link to="home" spy={true} smooth={true} offset={50} duration={500}>&lsaquo;WM/&rsaquo;</Link></p>
        <MenuMobile />
        <ul>
          {MenuItens.map((obj) => {return <li><Link to={obj.link} spy={true} smooth={true} offset={50} duration={500}>{obj.name}</Link></li>})}
        </ul>
      </nav>
  </HeaderContainer>
  )
}

export default Header