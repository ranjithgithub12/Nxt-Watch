import styled from 'styled-components'

export const TotalGamingContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? ' #0f0f0f' : ' #f9f9f9'};
  min-height: 100vh;
`

export const GamingMenuListAndVideoContianer = styled.div`
  display: flex;
`

export const GamingHeaderAndVideoContainer = styled.div`
  width: 80%;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const GamingHeaderContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#313131' : '#f1f1f1'};
  padding: 20px;
  display: flex;
  align-items: center;
`

export const LoaderContainer = styled.div`
  width: 80%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const FailureViewContianer = styled.div`
  width: 80%;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const GamingTittle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
  margin-left: 10px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`
export const GamingIconContainer = styled.div`
  background-color: #cbd5e1;
  padding: 20px;
  border-radius: 35px;
`

export const UnorderListOfGamingVideos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 00px;
`
