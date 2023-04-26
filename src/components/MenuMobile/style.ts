import styled from "styled-components";

export const MobileContainer = styled.div`
  
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
  animation: show-down .3s forwards;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 80px;
    width: 100vw;
    height: calc(100vh - 82px);
    right: 1%;
    background: #151515;
    padding:  0 10px;
    z-index: 1;
    margin: 0;
    font-family: "Inter", sans-serif;
    
  }

  li {
    margin-top: 0.5rem;
  }
`