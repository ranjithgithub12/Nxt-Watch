import styled from 'styled-components'

export const VideoAndAllContentContainer = styled.div`
margin:5px`

export const VideoContianer = styled.div``

export const VideoHeadingContainer = styled.p`
color:${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
font-family:'Roboto';
font-size:22px;
font-weight:500;
@media (max-width:767px){
    font-size:15px;
}`

export const VideoDetailsViewAndLikeContainer = styled.div`
display:flex;
justify-content:space-between;
@media (max-width:767px){
   flex-direction:column;
   justify-content:flex-start;
}`

export const VideoViewAndYearContainer = styled.div`
display: flex;`

export const VideoViewAndYearContent = styled.p`
margin-right:10px;
font-size:18px;
font-familt:"Roboto";
font-weight:500;
color:#606060`

export const VideoLikeDislikeSavedContainer = styled.div`
display:flex;`

export const FeedbackButton = styled.button`
background-color:transparent;
border:none;
font-family:"Roboto";
font-size:18px;
margin-right:15px;
color:${props => (props.color === 'active' ? '#2563eb' : '#64748b')};
cursor:pointer;
@media (max-width:767px){
    font-size:13px;
}`

export const HorizontalLine = styled.hr``

export const CompanyLogoAndDescrictionContainer = styled.div`
display:flex;`

export const VideoCompanyImage = styled.img`
width:50px;
height:50px;`

export const CompanyNameAndSubcribers = styled.div`
margin-left:10px;`
export const CompanyNameHeading = styled.p`
font-size:20px;
font-family:"Roboto";
font-weight:500;
color:${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
@media (max-width:767px){
    font-size:15px;
}`
export const TotalVideoSubcribers = styled.p`
font-size:16px;
font-family:"Roboto";
font-weight:500;
color: #475569;
@media (max-width:767px){
    font-size:13px;
}`

export const VideoDescription = styled.p`
font-size:16px;
font-family:"Roboto";
font-weight:400;
color: ${props => (props.color === 'dark' ? '#ffffff' : '#383838')};
@media (max-width:767px){
    font-size:13px;
}`
