import {formatDistanceToNow} from 'date-fns'

import {
  ListOfVideoContainer,
  StyledLink,
  VideoImage,
  ChannelAndContentContainer,
  ChannelLogo,
  ChannelContent,
  VideoDetailsContainer,
  VideoName,
  VideoDateAndViewContainer,
  VideoCount,
  VideoDate,
  VideoAllDetails,
} from './styledComponents'

const ListOfVideos = props => {
  const {theme, eachList} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = eachList
  const channelDetails = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  const {name, profileImageUrl} = channelDetails
  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  return (
    <StyledLink to={`/videos/${id}`}>
      <ListOfVideoContainer>
        <VideoImage src={thumbnailUrl} alt="video thumbnail" />
        <ChannelAndContentContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <VideoAllDetails>
            <ChannelContent color={theme}>{title}</ChannelContent>
            <VideoDetailsContainer>
              <VideoName>{name}</VideoName>
              <VideoDateAndViewContainer>
                <VideoCount>{viewCount} views</VideoCount>
                <VideoDate>{postedAt} ago</VideoDate>
              </VideoDateAndViewContainer>
            </VideoDetailsContainer>
          </VideoAllDetails>
        </ChannelAndContentContainer>
      </ListOfVideoContainer>
    </StyledLink>
  )
}

export default ListOfVideos
