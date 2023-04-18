import { HeaderContainer } from "./styles"


function Header() {
  return(
    <HeaderContainer>
    <header>
      <nav>
        <p><a href="#home">&lsaquo;WM/&rsaquo;</a></p>
        <ul>
          <a href="#home">
          <li>Home</li>
        </a>
          <a href="#sobre">
            <li>Sobre</li>
          </a>
          <a href="#experiencia">
          <li>Experiência</li>
        </a>
        <a href="#projetos">
          <li>Projetos</li>
        </a>
        </ul>
      </nav>
    </header>
  </HeaderContainer>
  )
}

export default Header