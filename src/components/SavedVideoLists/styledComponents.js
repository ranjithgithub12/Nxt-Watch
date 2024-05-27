import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
text-decoration: none;`

export const ListOfSavedVideos = styled.li`
  list-style-type: none;
  display: flex;
  margin: 20px;
  @media (max-width: 567px) {
    flex-direction: column;
    margin: 5px;
  }
`
export const SavedImage = styled.img`
  width: 250px;
  height:250px;
@media (max-width: 767px){
  width:100%;
}
`

export const SavedContentContainerMobile = styled.div`
  display: flex;
  padding: 10px;
  @media (min-width: 568px) {
    display: none;
  }
`

export const SavedLogoImage = styled.img`
  width: 50px;
  height: 50px;
`
export const SavedMobileAllContentContainer = styled.div`
  margin-left: 10px;
`

export const SavedMobileTitle = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
`

export const SavedMobileViewAndYear = styled.div`
  display: flex;
  align-items: center;
`

export const SavedMobileContent = styled.p`
  margin-right: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const SavedMobileList = styled.li`
  margin-right: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const SavedDesktopAllContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  @media (max-width: 567px) {
    display: none;
  }
`

export const SavedDesktopHeading = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
`

export const SavedDesktopName = styled.p`
  margin-right: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const SavedDesktopViewAndData = styled.div`
  display: flex;
`

export const SavedDesktopList = styled.p`
  margin-right: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
`
