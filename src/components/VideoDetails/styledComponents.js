import styled from 'styled-components'

export const TotalVideoDetailContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  min-height: 100vh;
`

export const VideoMenuAndDetailsContainer = styled.div`
  display: flex;
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
export const VideoDetailContainer = styled.div`
  width: 80%;
  @media (max-width: 767px) {
    width: 100%;
  }
`
