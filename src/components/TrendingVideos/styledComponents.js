import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? ' #0f0f0f' : ' #f9f9f9'};
  min-height: 100vh;
`

export const TrendingMenuListAndVideoContainer = styled.div`
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

export const TrendingContainerList = styled.div`
  width: 80%;
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const UnorderListOfTrendingVideos = styled.ul`
  padding: 00px;
  display: flex;
  flex-direction: column;
`

export const TrendingHeaderContianer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#313131' : '#f1f1f1'};
  padding: 20px;
  display: flex;
  align-items: center;
`

export const TrendingIconContainer = styled.div`
  background-color: #cbd5e1;
  padding: 20px;
  border-radius: 35px;
`

export const TrendingImage = styled.img`
  width: 50px;
`

export const TrendingContent = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 10px;
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
`
