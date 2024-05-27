import {Component} from 'react'

import Header from '../Header'
import MenuItemList from '../MenuItemList'
import {AiFillFire} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'
import SavedVideos from '../../context/SavedVideos'
import SavedVideoLists from '../SavedVideoLists'

import {
  TotalSavedVideoContainer,
  SavedMenuAndVideoLists,
  NoSavedVideosContianer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosParagraph,
  SavedVideosContainer,
  SavedHeaderContainer,
  SavedIconContainer,
  SavedTittle,
  UnorderListOfSavedVideos,
} from './styledComponents'

const SavedVideoItem = () => {
  const renderSavedVideoList = theme => {
    return (
      <SavedVideos.Consumer>
        {value => {
          const {savedVideo} = value
          const lengthOfSavedVideos = savedVideo.length === 0

          return lengthOfSavedVideos ? (
            <NoSavedVideosContianer>
              <NoSavedVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoSavedVideosHeading color={theme}>
                No saved videos found
              </NoSavedVideosHeading>
              <NoSavedVideosParagraph color={theme}>
                You can save your videos while watching them
              </NoSavedVideosParagraph>
            </NoSavedVideosContianer>
          ) : (
            <SavedVideosContainer>
              <SavedHeaderContainer bgColor={theme}>
                <SavedIconContainer>
                  <AiFillFire size="25" color="red" />
                </SavedIconContainer>
                <SavedTittle color={theme}>Saved Videos</SavedTittle>
              </SavedHeaderContainer>
              <UnorderListOfSavedVideos>
                {savedVideo.map(eachList => (
                  <SavedVideoLists
                    key={eachList.id}
                    eachList={eachList}
                    theme={theme}
                  />
                ))}
              </UnorderListOfSavedVideos>
            </SavedVideosContainer>
          )
        }}
      </SavedVideos.Consumer>
    )
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <TotalSavedVideoContainer bgColor={theme}>
            <Header />
            <SavedMenuAndVideoLists>
              <MenuItemList />
              {renderSavedVideoList(theme)}
            </SavedMenuAndVideoLists>
          </TotalSavedVideoContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem
