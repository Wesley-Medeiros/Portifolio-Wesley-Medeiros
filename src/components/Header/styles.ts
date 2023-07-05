import styled from 'styled-components'

export const HeaderContainer = styled.header`

  position: fixed;
  width: 100%;
  z-index: 1;

nav {
  padding: 0 15%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundLight};
  border-bottom: 2px solid #272727;
  font-weight: bold;
  height: 80px;
  transition: 0.3s;
}

nav.fixed {
  box-shadow: 0 4px 4px rgba(0,0,0,.3);
}

nav ul {
  display: flex;
  justify-content: end;
}

nav ul li {
  list-style: none;
  margin: 10px 30px;
}

nav ul li::after {
  content: "";
  display: block;
  border-bottom: 2px solid ${({ theme }) => theme.blue};
  margin-top: 5px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

nav ul li:hover::after {
  transform: scaleX(1);
}

nav p {
  padding: 10px;
  font-size: 1.3rem;
  width: 100%;
}

nav p a {
  color: ${({ theme }) => theme.blue};
  transition: 0.3s;
}

nav a {
  cursor: pointer;
}

nav p a:hover {
  color: rgba(147, 88, 247, 1);
}

@media (max-width: 880px) {
  nav {
        padding: 0 5% !important;
    }

  nav ul {
    display: none;
  }
  }
`



