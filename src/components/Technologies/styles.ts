import styled from "styled-components"

export const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  min-height: 60vh;
  padding: 6.5%;
`
export const StudiedTechnologies = styled.div`
text-align: center;
`


export const TechnologiesGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 3rem;

  svg {
    font-size: 5rem;
  }

  @media (max-width: 880px) {
    padding: 0.5rem;
    gap: 0.5rem;

    svg {
      font-size: 4rem;
    }
  }
    
  @media (max-width: 540px) {
    padding: 0.5rem;
    gap: 0.1rem;

    svg {
      font-size: 3.5rem;
    }
  }
  `

 
