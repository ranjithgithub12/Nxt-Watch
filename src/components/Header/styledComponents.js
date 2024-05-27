import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 20px;
  background-color: ${props =>
    props.bgColor === 'dark' ? '#231f20' : '#ffffff'};
`

export const WebsiteLogo = styled.img`
  width: 150px;
  @media (max-width: 767px) {
    width: 100px;
  }
`

export const ProfileandLogoutContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  align-items: center;
`

export const ModeImageButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ProfileImage = styled.img`
  width: 50px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const MobileViewGamber = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.color === 'dark' ? '#ffffff' : 'black')};
  @media (min-width: 767px) {
    display: none;
  }
`

export const LogoutButtonDesktop = styled.button`
  border: 1px solid;
  border-radius: 5px;
  padding: 8px 15px 8px 15px;
  background-color: transparent;
  font-size: 15px;
  font-family: 'Roboto';
  cursor: pointer;
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#3b82f6')};
  @media (max-width: 767px) {
    display: none;
  }
`

export const TriggerContainer = styled.div``

export const LogoutButtonMobile = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.color === 'dark' ? '#ffffff' : 'black')};
  @media (min-width: 768px) {
    display: none;
  }
`

export const LogoutConfirmContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#181818' : '#f1f5f9'};
  border-radius: 8px;
  padding: 30px;
  min-height: 20vh;
`

export const LogoutConfirmContent = styled.p`
  color: ${props => (props.color === 'dark' ? '#ffffff' : 'black')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const CancelButton = styled.button`
  cursor: pointer;
  padding: 8px 15px 8px 15px;
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  background-color: transparent;
  border: 1px solid #475569;
  border-radius: 5px;
`

export const ConfirmButton = styled(CancelButton)`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
`

export const MobileMenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 80vh;
  padding: 30px;
  background-color: ${props =>
    props.bgColor === 'dark' ? '#181818' : '#ffffff'};
  @media (min-width: 767px) {
    display: none;
  }
`

export const MenuCloseButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#181818')};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const MenuImageandContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${props => (props.active ? '#616e7c' : 'transparent')};
  padding: 10px;
`

export const MenuContent = styled.p`
  color: ${props => (props.color === 'dark' ? '#ffffff' : 'black')};
  font-size: ${props => (props.size ? '20px' : '15px')};
  font-family: 'Roboto';
  font-weight: 500;
  width: 100px;
  margin-left: 10px;
`
