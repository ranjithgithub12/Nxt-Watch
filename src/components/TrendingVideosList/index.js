import {formatDistanceToNow} from 'date-fns'

import {
  StyledLink,
  ListOfTrendingVideos,
  TrendingImage,
  TrendingContentContainerMobile,
  TrendingLogoImage,
  TrendingMobileAllContentContainer,
  TrendingMobileTitle,
  TrendingMobileViewAndYear,
  TrendingMobileContent,
  TrendingMobileList,
  TrendingDesktopAllContentContainer,
  TrendingDesktopHeading,
  TrendingDesktopName,
  TrendingDesktopViewAndData,
  TrendingDesktopList,
} from './styledComponents'

const TrendingVideosList = props => {
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
      <ListOfTrendingVideos>
        <TrendingImage src={thumbnailUrl} alt="video thumbnail" />

        <TrendingContentContainerMobile>
          <TrendingLogoImage src={profileImageUrl} alt="channel logo" />
          <TrendingMobileAllContentContainer>
            <TrendingMobileTitle color={theme}>{title}</TrendingMobileTitle>
            <TrendingMobileViewAndYear>
              <TrendingMobileContent color={theme}>
                {name}
              </TrendingMobileContent>
              <TrendingMobileList color={theme}>
                {viewCount} views
              </TrendingMobileList>
              <TrendingMobileList color={theme}>
                {postedAt} ago
              </TrendingMobileList>
            </TrendingMobileViewAndYear>
          </TrendingMobileAllContentContainer>
        </TrendingContentContainerMobile>

        <TrendingDesktopAllContentContainer>
          <TrendingDesktopHeading color={theme}>{title}</TrendingDesktopHeading>
          <TrendingDesktopName>{name}</TrendingDesktopName>
          <TrendingDesktopViewAndData>
            <TrendingDesktopList>{viewCount} views</TrendingDesktopList>
            <TrendingDesktopList>{postedAt} ago</TrendingDesktopList>
          </TrendingDesktopViewAndData>
        </TrendingDesktopAllContentContainer>
      </ListOfTrendingVideos>
    </StyledLink>
  )
}

export default TrendingVideosList
