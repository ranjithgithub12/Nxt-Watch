import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'

import Header from '../Header'
import MenuItemList from '../MenuItemList'
import ThemeContext from '../../context/ThemeContext'
import ApiFailureView from '../ApiFailureView'
import TrendingVideosList from '../TrendingVideosList'

import {
  TrendingVideosContainer,
  TrendingMenuListAndVideoContainer,
  LoaderContainer,
  FailureViewContianer,
  UnorderListOfTrendingVideos,
  TrendingContainerList,
  TrendingHeaderContianer,
  TrendingIconContainer,
  TrendingContent,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class TrendingVideos extends Component {
  state = {trendingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const api = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(api, options)
    const data = await response.json()

    if (response.ok === true) {
      const updateData = data.videos.map(eachItem => ({
        channel: eachItem.channel,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        trendingList: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clikRetryButton = () => {
    this.getTrendingVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {trendingList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <TrendingContainerList>
              <TrendingHeaderContianer bgColor={theme}>
                <TrendingIconContainer>
                  <AiFillFire size="25" color="red" />
                </TrendingIconContainer>
                <TrendingContent color={theme}>Trending</TrendingContent>
              </TrendingHeaderContianer>
              <UnorderListOfTrendingVideos>
                {trendingList.map(eachList => (
                  <TrendingVideosList
                    eachList={eachList}
                    key={eachList.id}
                    theme={theme}
                  />
                ))}
              </UnorderListOfTrendingVideos>
            </TrendingContainerList>
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

  renderAllDetails = () => {
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
            <TrendingVideosContainer data-testid="trending" bgColor={theme}>
              <Header />
              <TrendingMenuListAndVideoContainer>
                <MenuItemList />
                {this.renderAllDetails()}
              </TrendingMenuListAndVideoContainer>
            </TrendingVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingVideos
