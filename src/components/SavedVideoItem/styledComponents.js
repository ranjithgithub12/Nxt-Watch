import styled from 'styled-components'

export const TotalSavedVideoContainer = styled.div`
background-color: ${props =>
  props.bgColor === 'dark' ? ' #0f0f0f' : ' #f9f9f9'};
  min-height: 100vh;`

export const SavedMenuAndVideoLists = styled.div`
 display:flex;`

export const NoSavedVideosContianer = styled.div`
width:80%;
min-height:80vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
@media (max-width: 767px){
  width:100%;
}`

export const NoSavedVideosImage = styled.img`
width:350px;`

export const NoSavedVideosHeading = styled.h1`
font-family:"Roboto";
font-size:25px;
font-weidth:500;
color: ${props => (props.color === 'dark' ? '#ffffff' : '#313131')};
@media (max-width: 767px){
  font-size:18px;
}`

export const NoSavedVideosParagraph = styled.p`
font-family:"Roboto";
font-size:18px;
font-weidth:400;
color: ${props => (props.color === 'dark' ? '#ffffff' : '#313131')};
@media (max-width: 767px){
  font-size:13px;
}`

export const SavedVideosContainer = styled.div`
width:80%;
@media (max-width:767px){
  width:100%;
}`

export const SavedHeaderContainer = styled.div`
background-color: ${props =>
  props.bgColor === 'dark' ? '#313131' : '#f1f1f1'};
padding: 20px;
display: flex;
align-items: center;`

export const SavedIconContainer = styled.div`
background-color: #cbd5e1;
padding: 20px;
border-radius: 35px;
`
export const SavedTittle = styled.h1`
font-size: 30px;
font-weight: 500;
font-family: 'Roboto';
color: ${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
margin-left: 10px;
@media (max-width: 767px) {
  font-size: 18px;
}`
export const UnorderListOfSavedVideos = styled.ul`
display: flex;
flex-direction:column;
padding: 00px;
`
