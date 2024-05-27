import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MenuItemListContianer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props =>
    props.bgColor === 'dark' ? '#231f20' : '#ffffff'};
  min-height: 85vh;
  @media (max-width: 767px) {
    display: none;
  }
`

export const MenuListItems = styled.ul`
padding:00px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const MenuItems = styled.li`
  list-style-type:none;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
  background-color: ${props => (props.bgColor ? '#909090' : '')};
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#424242')};
`

export const MenuName = styled.p`
  margin-left: 10px;
  font-size: ${props => (props.colorSize ? '20px' : '15px')};
  font-weigth: 500;
  font-family: 'Roboto';
`
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactAs = styled.p`
  color: ${props => (props.color === 'dark' ? '#ffffff' : ' #475569')};
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 10px;
`

export const MediaImageContainer = styled.div`
  display: flex;
`
export const MediaImage = styled.img`
  width: 40px;
  margin-left: 10px;
`

export const MediaContent = styled.p`
color:${props => (props.color === 'dark' ? '#ffffff' : ' #475569')};
padding:10px;
font-size:18px
font-family: "Roboto"
font-weight:500;
`
