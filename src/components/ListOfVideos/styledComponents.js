import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListOfVideoContainer = styled.li`
  list-style-type: none;
  margin: 5px;
  width: 300px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const VideoImage = styled.img`
  width: 300px;
`
export const ChannelAndContentContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelLogo = styled.img`
  align-self: flex-start;
  width: 50px;
  height: 50px;
  margin-top: 10px;
`

export const ChannelContent = styled.p`
  margin-left: 5px;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#231f20')};
  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const VideoAllDetails = styled.div``

export const VideoDetailsContainer = styled.div`
  @media (max-width: 567px) {
    display: flex;
  }
`
export const VideoName = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #909090;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const VideoDateAndViewContainer = styled.div`
  padding: 00px;
  display: flex;
  align-items: center;
  margin-top: 00px;
`

export const VideoCount = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #909090;
  margin-left: 10px;
  @media (min-width: 568px) {
    margin-left: 0px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
export const VideoDate = styled.p`
  margin-left: 10px;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #909090;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
