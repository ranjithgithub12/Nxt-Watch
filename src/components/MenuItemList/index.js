import {withRouter} from 'react-router-dom'

import {IoMdHome} from 'react-icons/io'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillFire} from 'react-icons/ai'
import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'
import {
  MenuItemListContianer,
  MenuListItems,
  StyledLink,
  MenuName,
  MenuItems,
  SocialMediaContainer,
  ContactAs,
  MediaImageContainer,
  MediaImage,
  MediaContent,
} from './styledComponents'

const MenuItemList = props => {
  const {match} = props
  const {path} = match

  let homeMenu
  let trendingMenu
  let gamingMenu
  let savedMenu

  switch (path) {
    case '/':
      homeMenu = 'active'
      trendingMenu = 'inactive'
      gamingMenu = 'inactive'
      savedMenu = 'inactive'
      break
    case '/trending':
      homeMenu = 'inactive'
      trendingMenu = 'active'
      gamingMenu = 'inactive'
      savedMenu = 'inactive'
      break
    case '/gaming':
      homeMenu = 'inactive'
      trendingMenu = 'inactive'
      gamingMenu = 'active'
      savedMenu = 'inactive'
      break
    case '/saved-videos':
      homeMenu = 'inactive'
      trendingMenu = 'inactive'
      gamingMenu = 'inactive'
      savedMenu = 'active'
      break
    default:
      homeMenu = 'inactive'
      trendingMenu = 'inactive'
      gamingMenu = 'inactive'
      savedMenu = 'inactive'
      break
  }
  const homeTheme = homeMenu === 'active'
  const trendingTheme = trendingMenu === 'active'
  const gamingTheme = gamingMenu === 'active'
  const savedTheme = savedMenu === 'active'

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <MenuItemListContianer bgColor={theme}>
            <MenuListItems>
              <StyledLink to="/">
                <MenuItems color={theme} bgColor={homeTheme}>
                  <IoMdHome size="25" color={homeTheme ? '#ff0b37' : ''} />
                  <MenuName colorSize={homeTheme}>Home</MenuName>
                </MenuItems>
              </StyledLink>
              <StyledLink to="/trending">
                <MenuItems color={theme} bgColor={trendingTheme}>
                  <AiFillFire
                    size="25"
                    color={trendingTheme ? '#ff0b37' : ''}
                  />
                  <MenuName colorSize={trendingTheme}>Trending</MenuName>
                </MenuItems>
              </StyledLink>
              <StyledLink to="/gaming">
                <MenuItems color={theme} bgColor={gamingTheme}>
                  <SiYoutubegaming
                    size="25"
                    color={gamingTheme ? '#ff0b37' : ''}
                  />
                  <MenuName colorSize={gamingTheme}>Gaming</MenuName>
                </MenuItems>
              </StyledLink>
              <StyledLink to="/saved-videos">
                <MenuItems color={theme} bgColor={savedTheme}>
                  <RiMenuAddLine
                    size="25"
                    color={savedTheme ? '#ff0b37' : ''}
                  />
                  <MenuName colorSize={savedTheme}>Saved videos</MenuName>
                </MenuItems>
              </StyledLink>
            </MenuListItems>

            <SocialMediaContainer>
              <ContactAs color={theme}>CONTACT US</ContactAs>
              <MediaImageContainer>
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </MediaImageContainer>
              <MediaContent color={theme}>
                Enjoy! Now to see your channels and recommendations!
              </MediaContent>
            </SocialMediaContainer>
          </MenuItemListContianer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(MenuItemList)
