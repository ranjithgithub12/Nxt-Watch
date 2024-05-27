import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdClose, IoMdSearch} from 'react-icons/io'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import MenuItemList from '../MenuItemList'
import ApiFailureView from '../ApiFailureView'
import ListOfVideos from '../ListOfVideos'

import {
  HomePageContainer,
  HomePageMenuAndContent,
  HomeVideosContainer,
  BannerContainer,
  BannerCloseButton,
  BannerLogo,
  BannerContent,
  BannerGetButton,
  HomeSearchAndListContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  SearchNoResultView,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultContent,
  NoSearchRetryButton,
  UnorderListOfVideos,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videoList: [],
  }

  componentDidMount() {
    this.getItemsDetails()
  }

  getItemsDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videoList: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clikRetryButton = () => {
    this.getItemsDetails()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videoList} = this.state
    const lengthOfList = videoList.length === 0

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return lengthOfList ? (
            <SearchNoResultView>
              <NoSearchResultImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoSearchResultHeading color={theme}>
                No Search results found
              </NoSearchResultHeading>
              <NoSearchResultContent color={theme}>
                Try different key words or remove search filter
              </NoSearchResultContent>
              <NoSearchRetryButton onClick={this.clikRetryButton}>
                Retry
              </NoSearchRetryButton>
            </SearchNoResultView>
          ) : (
            <UnorderListOfVideos>
              {videoList.map(eachList => (
                <ListOfVideos
                  theme={theme}
                  eachList={eachList}
                  key={eachList.id}
                />
              ))}
            </UnorderListOfVideos>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <ApiFailureView clikRetryButton={this.clikRetryButton} />
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

  onClickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getItemsDetails()
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getItemsDetails()
    }
  }

  renderBannerView = () => {
    const {showBanner} = this.state
    return (
      showBanner && (
        <BannerContainer data-testid="banner">
          <BannerCloseButton
            data-testid="close"
            onClick={this.onClickCloseBanner}
          >
            <IoMdClose size="25" />
          </BannerCloseButton>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerContent>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerContent>
          <BannerGetButton>GET IT NOW</BannerGetButton>
        </BannerContainer>
      )
    )
  }

  render() {
    const {searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <HomePageContainer data-testid="home" bgColor={theme}>
              <Header />
              <HomePageMenuAndContent>
                <MenuItemList />
                <HomeVideosContainer>
                  {this.renderBannerView()}
                  <HomeSearchAndListContainer>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        value={searchInput}
                        onChange={this.onChangeInput}
                        placeholder="Search"
                        color={theme}
                        onKeyDown={this.onEnterSearchInput}
                      />
                      <SearchButton
                        data-testid="searchButton"
                        onClick={this.onClickSearchButton}
                      >
                        <IoMdSearch
                          size="25"
                          color={theme === 'dark' ? '#ffffff' : '#000000'}
                        />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderAllDetails()}
                  </HomeSearchAndListContainer>
                </HomeVideosContainer>
              </HomePageMenuAndContent>
            </HomePageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
