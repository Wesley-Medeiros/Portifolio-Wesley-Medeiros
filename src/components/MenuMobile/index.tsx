import { Link } from "react-scroll"
import { HamburguerMenu, ListContainer, MobileContainer } from "./style"

function MenuMobile() {
  return(
    <MobileContainer>
      <HamburguerMenu></HamburguerMenu>
        <ListContainer>
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            <li>Home</li>
            </Link>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
              <li>Sobre</li>
            </Link>
            <Link to="technologies" spy={true} smooth={true} offset={50} duration={500}>
            <li>Tecnologias</li>
            </Link>
        </ListContainer>
    </MobileContainer>
  )
}

export default MenuMobile