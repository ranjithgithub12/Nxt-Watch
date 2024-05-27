import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'
import SavedVideos from './context/SavedVideos'
import Home from './components/Home'
import Login from './components/Login'
import TrendingVideos from './components/TrendingVideos'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetails from './components/VideoDetails'
import GamingVideos from './components/GamingVideos'
import SavedVideoItem from './components/SavedVideoItem'
import NotFound from './components/NotFound'

class App extends Component {
  state = {isDarkTheme: false, savedVideo: [], isSaved: false}

  onChangeTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addTheSavedVideo = videoDetails => {
    this.setState(prev => ({
      savedVideo: [...prev.savedVideo, videoDetails],
    }))
  }

  removeTheSavedVideo = videoDetails => {
    const {savedVideo} = this.state
    const updatedList = savedVideo.filter(each => each.id !== videoDetails.id)
    this.setState({savedVideo: updatedList})
  }

  updateSaveVideosList = videoDetails => {
    const {isSaved} = this.state
    if (isSaved) {
      this.removeTheSavedVideo(videoDetails)
    } else {
      this.addTheSavedVideo(videoDetails)
    }
  }

  updateSave = videoDetails => {
    this.setState(
      prevState => ({
        isSaved: !prevState.isSaved,
      }),
      this.updateSaveVideosList(videoDetails),
    )
  }

  render() {
    const {isDarkTheme, savedVideo, isSaved} = this.state
    console.log(savedVideo)
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.onChangeTheme,
        }}
      >
        <SavedVideos.Provider
          value={{
            isSaved,
            savedVideo,
            addTheSavedVideo: this.addTheSavedVideo,
            removeTheSavedVideo: this.removeTheSavedVideo,
            updateSave: this.updateSave,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={TrendingVideos} />
            <ProtectedRoute exact path="/gaming" component={GamingVideos} />
            <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideoItem}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </SavedVideos.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
