import {
  FailureContianer,
  FailureImage,
  FailureHeading,
  FailureConent,
  FailureRetryButton,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const ApiFailureView = props => {
  const {clikRetryButton} = props

  const onClickRetry = () => {
    clikRetryButton()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContianer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading color={theme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureConent color={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureConent>
            <FailureRetryButton onClick={onClickRetry}>
              Retry
            </FailureRetryButton>
          </FailureContianer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ApiFailureView
