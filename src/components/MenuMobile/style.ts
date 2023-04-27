import styled, { css } from "styled-components";

export const MobileContainer = styled.div`
  list-style: none;

  svg {
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer; 
    transform: rotate(0deg);
  }
`

export const HamburguerMenu = styled.div`
  display: none;

  @media (max-width: 880px) {
    display: block;
    background-color: #151515;
    border: none;
    border-top: 3px #00d2df solid;
    padding: 0.8rem 1rem;
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

export const ListContainer = styled.div`
  display: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 80px;
    width: 100vw;
    height: calc(100vh - 80px);
    right: 1%;
    padding:  0 10px;
    z-index: 1;
    margin: 0;
    font-family: "Inter", sans-serif;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    transform: translateY(50px);

    background: #151515; 
    background: linear-gradient(34deg, rgba(0,210,223,1) 0%, rgba(17,18,17,0.95) 95%);
    backdrop-filter: blur(3px);

    a {
      color: #ffff;
    }
    

    ${({ isVisible }:{isVisible: boolean}) => isVisible && css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    `}
    
  }

    li::after {
      content: "";
      display: block;
      border-bottom: 2px solid #00d2df;
      margin-top: 5px;
      transform: scaleX(0);
      transition: transform 0.3s ease;
  }

      li:hover::after {
        transform: scaleX(1);
    }


  a {
    cursor: pointer;
    color: #00d2df;
    transition: 0.3s;
    margin-top: 2rem;
  }

  a:hover {
    color: rgba(147, 88, 247, 1);
}
`