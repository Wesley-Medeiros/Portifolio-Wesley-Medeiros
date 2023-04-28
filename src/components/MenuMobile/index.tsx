import { useState } from "react"
import { Link } from "react-scroll"
import { HamburguerMenu, ListContainer, MobileContainer } from "./style"
import { IoClose } from "react-icons/io5"


function MenuMobile() {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const MenuMobileItens = [
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
    <MobileContainer> 
      {menuIsVisible ? <IoClose size={45} onClick={() => setMenuIsVisible(false)}/> : <HamburguerMenu onClick={() => setMenuIsVisible(!menuIsVisible)}></HamburguerMenu>} 
        <ListContainer isVisible={menuIsVisible}>          
          <Link onClick={() => setMenuIsVisible(false)} to="home" spy={true} smooth={true} offset={50} duration={500}>
            <li>Home</li>
          </Link>
          <Link onClick={() => setMenuIsVisible(false)} to="about" spy={true} smooth={true} offset={50} duration={500}>
            <li>Sobre</li>
          </Link>
          <Link onClick={() => setMenuIsVisible(false)} to="technologies" spy={true} smooth={true} offset={50} duration={500}>
            <li>Tecnologias</li>
          </Link>     
        </ListContainer>
    </MobileContainer>
  )
}

export default MenuMobile