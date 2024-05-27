import styled from 'styled-components'

export const TotalNotFoundContainer = styled.div`
background-color: ${props =>
  props.bgColor === 'dark' ? '#0f0f0f' : '#f9f9f9'};
min-height: 100vh;
`
export const NotFoundMenuAndContainer = styled.div`
display:flex;`

export const NotFoundImageAndContentContainer = styled.div`
width:80%;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
@media (max-width:767px){
    width:100%;
}`
export const NotFoundImage = styled.img`
width:350px;
@media (max-width:767px){
    width:250px;
}`

export const NotFoundHeading = styled.h1`
font-family:"Roboto";
font-size:20px;
font-weight:500;
color:${props => (props.color === 'dark' ? '#ffffff' : '#4f46e5')};
@media (max-width: 767px){
    font-size:18px;
}`
export const NotFoundContent = styled.p`
font-family:"Roboto";
font-size:17px;
text-align:center;
font-weight:400;
color:${props => (props.color === 'dark' ? '#ffffff' : '#212121')};
@media (max-width: 767px){
    font-size:13px;
}`
