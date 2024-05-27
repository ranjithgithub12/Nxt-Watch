import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosLogOut, IoMdClose, IoMdHome} from 'react-icons/io'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillFire} from 'react-icons/ai'
import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {
  NavHeader,
  WebsiteLogo,
  ProfileandLogoutContainer,
  ModeImageButton,
  ProfileImage,
  MobileViewGamber,
  LogoutButtonDesktop,
  LogoutButtonMobile,
  LogoutConfirmContainer,
  LogoutConfirmContent,
  TriggerContainer,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  MobileMenuListContainer,
  MenuCloseButton,
  StyledLink,
  MenuImageandContent,
  MenuContent,
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {match} = this.props
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
          const {isDarkTheme, changeTheme} = value
          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <NavHeader bgColor={theme}>
              <Link to="/">
                <WebsiteLogo src={websiteLogo} alt="website logo" />
              </Link>
              <ProfileandLogoutContainer>
                <ModeImageButton
                  data-testid="theme"
                  onClick={() => changeTheme()}
                >
                  {isDarkTheme ? (
                    <FiSun color="white" size="25" />
                  ) : (
                    <FaMoon size="25" />
                  )}
                </ModeImageButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <MobileViewGamber color={theme}>
                      <GiHamburgerMenu size="25" />
                    </MobileViewGamber>
                  }
                >
                  {close => (
                    <MobileMenuListContainer bgColor={theme}>
                      <MenuCloseButton color={theme} onClick={() => close()}>
                        <IoMdClose size="25" />
                      </MenuCloseButton>
                      <StyledLink to="/">
                        <MenuImageandContent active={homeTheme}>
                          <IoMdHome
                            size="25"
                            color={homeTheme ? 'red' : '#7e858e'}
                          />
                          <MenuContent color={theme} size={homeTheme}>
                            Home
                          </MenuContent>
                        </MenuImageandContent>
                      </StyledLink>
                      <StyledLink to="/trending">
                        <MenuImageandContent active={trendingTheme}>
                          <AiFillFire
                            size="25"
                            color={trendingTheme ? 'red' : '#7e858e'}
                          />
                          <MenuContent color={theme} size={trendingTheme}>
                            Trending
                          </MenuContent>
                        </MenuImageandContent>
                      </StyledLink>
                      <StyledLink to="/gaming">
                        <MenuImageandContent active={gamingTheme}>
                          <SiYoutubegaming
                            size="25"
                            color={gamingTheme ? 'red' : '#7e858e'}
                          />
                          <MenuContent color={theme} size={gamingTheme}>
                            Gaming
                          </MenuContent>
                        </MenuImageandContent>
                      </StyledLink>
                      <StyledLink to="/saved-videos">
                        <MenuImageandContent active={savedTheme}>
                          <RiMenuAddLine
                            size="25"
                            color={savedTheme ? 'red' : '#7e858e'}
                          />
                          <MenuContent color={theme} size={savedTheme}>
                            Saved videos
                          </MenuContent>
                        </MenuImageandContent>
                      </StyledLink>
                    </MobileMenuListContainer>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <TriggerContainer>
                      <LogoutButtonDesktop color={theme}>
                        Logout
                      </LogoutButtonDesktop>
                      <LogoutButtonMobile color={theme}>
                        <IoIosLogOut size="25" />
                      </LogoutButtonMobile>
                    </TriggerContainer>
                  }
                >
                  {close => (
                    <LogoutConfirmContainer bgColor={theme}>
                      <LogoutConfirmContent color={theme}>
                        Are you sure, you want to logout ?
                      </LogoutConfirmContent>
                      <ButtonContainer>
                        <CancelButton color={theme} onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          onClick={this.onClickLogout}
                          color={theme}
                        >
                          Confirm
                        </ConfirmButton>
                      </ButtonContainer>
                    </LogoutConfirmContainer>
                  )}
                </Popup>
              </ProfileandLogoutContainer>
            </NavHeader>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
