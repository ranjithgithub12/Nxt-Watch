import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike} from 'react-icons/ai'
import {AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddLine} from 'react-icons/ri'

import SavedVideos from '../../context/SavedVideos'

import {
  VideoAndAllContentContainer,
  VideoContianer,
  VideoHeadingContainer,
  VideoDetailsViewAndLikeContainer,
  VideoViewAndYearContainer,
  VideoViewAndYearContent,
  VideoLikeDislikeSavedContainer,
  FeedbackButton,
  HorizontalLine,
  CompanyLogoAndDescrictionContainer,
  VideoCompanyImage,
  CompanyNameAndSubcribers,
  CompanyNameHeading,
  TotalVideoSubcribers,
  VideoDescription,
} from './styledComponents'

class VideoPlayItem extends Component {
  state = {isLiked: false, isDislike: false}

  onClickLikeButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDislike: false,
    }))
  }
  onClickDislikeButton = () => {
    this.setState(prevState => ({
      isDislike: !prevState.isDislike,
      isLiked: false,
    }))
  }

  render() {
    const {videoDetails, theme} = this.props
    const {isLiked, isDislike} = this.state
    const {
      id,
      publishedAt,
      title,
      thumbnailUrl,
      videoUrl,
      viewCount,
      description,
      channel,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel

    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }
    return (
      <SavedVideos.Consumer>
        {value => {
          const {updateSave, isSaved, savedVideo} = value

          const likeTheme = isLiked ? 'active' : 'inActive'
          const dislikeTheme = isDislike ? 'active' : 'inActive'

          const present = savedVideo.find(each => each.id === id)
          const saveIsActive = present !== undefined ? 'active' : 'inActive'
          const saveText = present !== undefined ? 'Saved' : 'Save'

          return (
            <VideoAndAllContentContainer data-testid="videoItemDetails">
              <VideoContianer>
                <ReactPlayer url={videoUrl} width="100%" />
              </VideoContianer>
              <VideoHeadingContainer color={theme}>
                {title}
              </VideoHeadingContainer>
              <VideoDetailsViewAndLikeContainer>
                <VideoViewAndYearContainer>
                  <VideoViewAndYearContent>
                    {viewCount} views
                  </VideoViewAndYearContent>
                  <VideoViewAndYearContent>
                    {postedAt} ago
                  </VideoViewAndYearContent>
                </VideoViewAndYearContainer>
                <VideoLikeDislikeSavedContainer>
                  <FeedbackButton
                    onClick={this.onClickLikeButton}
                    color={likeTheme}
                  >
                    <AiOutlineLike />
                    Like
                  </FeedbackButton>
                  <FeedbackButton
                    onClick={this.onClickDislikeButton}
                    color={dislikeTheme}
                  >
                    <AiOutlineDislike />
                    Dislike
                  </FeedbackButton>
                  <FeedbackButton
                    onClick={() => updateSave(videoDetails)}
                    color={saveIsActive}
                  >
                    <RiMenuAddLine />
                    {saveText}
                  </FeedbackButton>
                </VideoLikeDislikeSavedContainer>
              </VideoDetailsViewAndLikeContainer>
              <HorizontalLine />
              <CompanyLogoAndDescrictionContainer>
                <VideoCompanyImage src={profileImageUrl} alt="channel logo" />
                <CompanyNameAndSubcribers>
                  <CompanyNameHeading color={theme}>{name}</CompanyNameHeading>
                  <TotalVideoSubcribers>
                    {subscriberCount} subscribers
                  </TotalVideoSubcribers>
                </CompanyNameAndSubcribers>
              </CompanyLogoAndDescrictionContainer>
              <VideoDescription color={theme}>{description}</VideoDescription>
            </VideoAndAllContentContainer>
          )
        }}
      </SavedVideos.Consumer>
    )
  }
}

export default VideoPlayItem
