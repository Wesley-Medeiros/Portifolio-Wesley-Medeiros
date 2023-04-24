import { ButtonMenu, HeaderContainer } from "./styles"

function Header() {
  return(
    <HeaderContainer>
    <header>
      <nav>
        <p><a href="#home">&lsaquo;WM/&rsaquo;</a></p>
        <ButtonMenu></ButtonMenu>
        <ul>
          <a href="#home">
          <li>Home</li>
        </a>
          <a href="#about">
            <li>Sobre</li>
          </a>
          <a href="#technologies">
          <li>Tecnologias</li>
        </a>
        </ul>
      </nav>
    </header>
  </HeaderContainer>
  )
}

export default Header