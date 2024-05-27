import styled from 'styled-components'

export const HomePageContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#181818' : '#f9f9f9'};
  min-height: 100vh;
`

export const HomePageMenuAndContent = styled.div`
  display: flex;
`
export const HomeVideosContainer = styled.div`
  width: 100%;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
`

export const BannerCloseButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  cursor: pointer;
`

export const BannerLogo = styled.img`
  width: 150px;
  @media (max-width: 767px) {
    width: 100px;
  }
`

export const BannerContent = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const BannerGetButton = styled.button`
  border: 1px solid #181818;
  background-color: transparent;
  font-size: 15px;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100px;
    font-size: 12px;
  }
`
export const HomeSearchAndListContainer = styled.div`
  padding: 20px;
`

export const SearchContainer = styled.div`
  border: 1px solid #909090;
  width: 40%;
  padding: 3px;
  border-radius: 5px;
  display: flex;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  border: none;
  width: 90%;
  padding: 10px;
  outline: none;
  color: ${props => (props.color === 'dark' ? '#ffffff' : 'black')};
  background-color: transparent;
`
export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SearchNoResultView = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoSearchResultImage = styled.img`
  width: 350px;
  @media (max-width: 767px) {
    width: 200px;
  }
`

export const NoSearchResultHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
  @media (max-width: 767px) {
    font-size: 15px;
  }
`

export const NoSearchResultContent = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  color: ${props => (props.color === 'dark' ? '#cccccc' : ' #7e858e')};
  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const NoSearchRetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  padding: 10px 18px 10px 18px;
  cursor: pointer;
`

export const UnorderListOfVideos = styled.ul`
  padding: 00px;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
