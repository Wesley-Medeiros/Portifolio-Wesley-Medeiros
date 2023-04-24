import styled from 'styled-components'

export const HeaderContainer = styled.header`

header {
  position: fixed;
  width: 100%;
  z-index: 100;
}

nav {
  padding: 0 15%;
  display: flex;
  align-items: center;
  background-color: #151515;
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
  border-bottom: 2px solid #00d2df;
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
  color: #00d2df;
  transition: 0.3s;
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

export const ButtonMenu = styled.button`
  display: none;

  @media (max-width: 880px) {
    display: block;
    background-color: #151515;
    border: none;
    border-top: 3px #00d2df solid;
    padding: .8rem 1rem;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    z-index: 100;

    ::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: #00d2df;
      transition: .3s transform;
    }

    ::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 50%;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: #00d2df;
      transition: .3s transform;
    }
  }
`



