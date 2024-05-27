import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const ListOfGamingVideos = styled.li`
  list-style-type: none;
  margin: 10px;
`

export const GamingImage = styled.img`
  width: 225px;
  @media (max-width: 767px) {
    width: 100px;
  }
`
export const GamingTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#00306e')};
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
export const GaimgViewCount = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #94a3b8;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`
