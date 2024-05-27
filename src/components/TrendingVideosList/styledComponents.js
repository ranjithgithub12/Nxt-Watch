import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const ListOfTrendingVideos = styled.li`
  list-style-type: none;
  display: flex;
  margin: 40px;
  @media (max-width: 567px) {
    flex-direction: column;
    margin: 5px;
  }
`
export const TrendingImage = styled.img`
  width: 350px;
`

export const TrendingContentContainerMobile = styled.div`
  display: flex;
  padding: 10px;
  @media (min-width: 568px) {
    display: none;
  }
`

export const TrendingLogoImage = styled.img`
  width: 50px;
  height: 50px;
`
export const TrendingMobileAllContentContainer = styled.div`
  margin-left: 10px;
`

export const TrendingMobileTitle = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
`

export const TrendingMobileViewAndYear = styled.div`
  display: flex;
  align-items: center;
`

export const TrendingMobileContent = styled.p`
  margin-right: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const TrendingMobileList = styled.p`
  margin-right: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const TrendingDesktopAllContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  @media (max-width: 567px) {
    display: none;
  }
`

export const TrendingDesktopHeading = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
`

export const TrendingDesktopName = styled.p`
  margin-right: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const TrendingDesktopViewAndData = styled.div`
  display: flex;
`

export const TrendingDesktopList = styled.p`
  margin-right: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
`
