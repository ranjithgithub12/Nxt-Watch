import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import MenuItemList from '../MenuItemList'
import VideoPlayItem from '../VideoPlayItem'
import ThemeContext from '../../context/ThemeContext'
import SavedVideos from '../../context/SavedVideos'
import ApiFailureView from '../ApiFailureView'

import {
  TotalVideoDetailContainer,
  VideoMenuAndDetailsContainer,
  LoaderContainer,
  FailureViewContianer,
  VideoDetailContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoDetails extends Component {
  state = {videoDetailsFromId: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(api, options)
    const data = await response.json()
    const videoDetails = data.video_details
    console.log(videoDetails)
    if (response.ok === true) {
      const updatedData = {
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        title: videoDetails.title,
        thumbnailUrl: videoDetails.thumbnail_url,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        description: videoDetails.description,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }

      this.setState({
        videoDetailsFromId: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clikRetryButton = () => {
    this.getVideosDetails()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videoDetailsFromId} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <VideoDetailContainer>
              <VideoPlayItem theme={theme} videoDetails={videoDetailsFromId} />
            </VideoDetailContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <FailureViewContianer>
      <ApiFailureView clikRetryButton={this.clikRetryButton} />
    </FailureViewContianer>
  )

  renderAllVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <TotalVideoDetailContainer bgColor={theme}>
              <Header />
              <VideoMenuAndDetailsContainer>
                <MenuItemList />
                {this.renderAllVideoDetails()}
              </VideoMenuAndDetailsContainer>
            </TotalVideoDetailContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
