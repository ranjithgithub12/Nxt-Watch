import {
  TotalNotFoundContainer,
  NotFoundMenuAndContainer,
  NotFoundImageAndContentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundContent,
} from './styledComponents'

import Header from '../Header'
import MenuItemList from '../MenuItemList'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        const notFoundImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

        return (
          <TotalNotFoundContainer bgColor={theme}>
            <Header />
            <NotFoundMenuAndContainer>
              <MenuItemList />
              <NotFoundImageAndContentContainer>
                <NotFoundImage src={notFoundImage} alt="not found" />
                <NotFoundHeading color={theme}>Page Not Found</NotFoundHeading>
                <NotFoundContent color={theme}>
                  We are sorry, the page you requested could not be found.
                </NotFoundContent>
              </NotFoundImageAndContentContainer>
            </NotFoundMenuAndContainer>
          </TotalNotFoundContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NotFound
