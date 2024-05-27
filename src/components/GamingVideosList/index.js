import {
  StyledLink,
  ListOfGamingVideos,
  GamingImage,
  GamingTitle,
  GaimgViewCount,
} from './styledComponents'

const GamingVideosList = props => {
  const {eachList, theme} = props
  const {id, title, thumbnailUrl, viewCount} = eachList

  return (
    <StyledLink to={`/videos/${id}`}>
      <ListOfGamingVideos>
        <GamingImage src={thumbnailUrl} alt="video thumbnail" />
        <GamingTitle color={theme}>{title}</GamingTitle>
        <GaimgViewCount color={theme}>
          {viewCount} Watching Worldwide
        </GaimgViewCount>
      </ListOfGamingVideos>
    </StyledLink>
  )
}

export default GamingVideosList
