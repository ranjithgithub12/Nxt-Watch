import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginPageContainer,
  FormContainer,
  WebsiteLogo,
  Label,
  Input,
  InputCheckBox,
  ShowPassword,
  CheckBoxContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    passwordType: 'password',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const api = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = event => {
    this.setState({passwordType: event.target.checked ? 'text' : 'password'})
  }

  render() {
    const {passwordType, username, password, errorMsg, showErrorMsg} =
      this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const bgColor = isDarkTheme ? 'dark' : 'light'

          return (
            <LoginPageContainer bgColor={bgColor}>
              <FormContainer bgColor={bgColor} onSubmit={this.onSubmitLogin}>
                <WebsiteLogo src={websiteLogo} alt="website logo" />
                <Label htmlFor="username" color={bgColor}>
                  USERNAME
                </Label>
                <Input
                  value={username}
                  onChange={this.onChangeUsername}
                  id="username"
                  type="text"
                />
                <Label htmlFor="password" color={bgColor}>
                  PASSWORD
                </Label>
                <Input
                  value={password}
                  onChange={this.onChangePassword}
                  id="password"
                  type={passwordType}
                />
                <CheckBoxContainer>
                  <InputCheckBox
                    type="checkbox"
                    onClick={this.onClickShowPassword}
                    id="showpassword"
                  />
                  <ShowPassword htmlFor="showpassword" color={bgColor}>
                    Show Password
                  </ShowPassword>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
