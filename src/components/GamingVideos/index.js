import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import MenuItemList from '../MenuItemList'
import ThemeContext from '../../context/ThemeContext'
import ApiFailureView from '../ApiFailureView'
import GamingVideosList from '../GamingVideosList'

import {
  TotalGamingContainer,
  GamingMenuListAndVideoContianer,
  LoaderContainer,
  FailureViewContianer,
  GamingHeaderAndVideoContainer,
  GamingHeaderContainer,
  GamingIconContainer,
  GamingTittle,
  UnorderListOfGamingVideos,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class GamingVideos extends Component {
  state = {gamingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const jwtToken = Cookies.get('jwt_token')
    const api = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(api, options)
    const data = await response.json()
    console.log(data.videos)
    if (response.ok === true) {
      const updateData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        gamingList: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clikRetryButton = () => {
    this.getGamingVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {gamingList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <GamingHeaderAndVideoContainer>
              <GamingHeaderContainer bgColor={theme}>
                <GamingIconContainer>
                  <SiYoutubegaming size="25" color="red" />
                </GamingIconContainer>
                <GamingTittle color={theme}>Gaming</GamingTittle>
              </GamingHeaderContainer>
              <UnorderListOfGamingVideos>
                {gamingList.map(eachList => (
                  <GamingVideosList
                    eachList={eachList}
                    key={eachList.id}
                    theme={theme}
                  />
                ))}
              </UnorderListOfGamingVideos>
            </GamingHeaderAndVideoContainer>
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
            <TotalGamingContainer data-testid="gaming" bgColor={theme}>
              <Header />
              <GamingMenuListAndVideoContianer>
                <MenuItemList />
                {this.renderAllVideoDetails()}
              </GamingMenuListAndVideoContianer>
            </TotalGamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingVideos
