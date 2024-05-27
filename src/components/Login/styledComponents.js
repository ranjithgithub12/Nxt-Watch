import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.bgColor === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 40vh;
  width: 35%;
  shadow: sm;
  border-radius: 10px;
  background-color: ${props => (props.bgColor === 'dark' ? 'black' : 'white')};
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const WebsiteLogo = styled.img`
  width: 150px;
  align-self: center;
`

export const Label = styled.label`
  margin: 15px 0px 5px 0px;
  color: ${props => (props.color === 'dark' ? 'white' : 'balck')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #94a3b8;
  outline: none;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const InputCheckBox = styled.input``

export const ShowPassword = styled.label`
  color: ${props => (props.color === 'dark' ? 'white' : 'balck')};
  margin-left: 10px;
  font-size: 15px;
  font-weight: 400;
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 5px;
  border: none;
  padding: 10px;
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
`
