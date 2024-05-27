import {formatDistanceToNow} from 'date-fns'

import {
  StyledLink,
  ListOfSavedVideos,
  SavedImage,
  SavedContentContainerMobile,
  SavedLogoImage,
  SavedMobileAllContentContainer,
  SavedMobileTitle,
  SavedMobileViewAndYear,
  SavedMobileContent,
  SavedMobileList,
  SavedDesktopAllContentContainer,
  SavedDesktopHeading,
  SavedDesktopName,
  SavedDesktopViewAndData,
  SavedDesktopList,
} from './styledComponents'

const SavedVideoLists = props => {
  const {eachList, theme} = props
  const {
    channel,
    description,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    videoUrl,
    viewCount,
  } = eachList

  const {name, profileImageUrl} = channel
  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  return (
    <StyledLink to={`/videos/${id}`}>
      <ListOfSavedVideos>
        <SavedImage src={thumbnailUrl} alt="video thumbnail" />

        <SavedContentContainerMobile>
          <SavedLogoImage src={profileImageUrl} alt="channel logo" />
          <SavedMobileAllContentContainer>
            <SavedMobileTitle color={theme}>{title}</SavedMobileTitle>
            <SavedMobileViewAndYear>
              <SavedMobileContent color={theme}>{name}</SavedMobileContent>
              <SavedMobileList color={theme}>{viewCount} views</SavedMobileList>
              <SavedMobileList color={theme}>{postedAt} ago</SavedMobileList>
            </SavedMobileViewAndYear>
          </SavedMobileAllContentContainer>
        </SavedContentContainerMobile>

        <SavedDesktopAllContentContainer>
          <SavedDesktopHeading color={theme}>{title}</SavedDesktopHeading>
          <SavedDesktopName>{name}</SavedDesktopName>
          <SavedDesktopViewAndData>
            <SavedDesktopList>{viewCount} views</SavedDesktopList>
            <SavedDesktopList>{postedAt} ago</SavedDesktopList>
          </SavedDesktopViewAndData>
        </SavedDesktopAllContentContainer>
      </ListOfSavedVideos>
    </StyledLink>
  )
}

export default SavedVideoLists
