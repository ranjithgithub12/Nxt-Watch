import React from 'react'

const SavedVideos = React.createContext({
  isSaved: false,
  savedVideo: [],
  updateSave: () => {},
  addTheSavedVideo: () => {},
  removeTheSavedVideo: () => {},
})

export default SavedVideos
