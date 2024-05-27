import styled from 'styled-components'

export const FailureContianer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  min-height: 70vh;
`
export const FailureImage = styled.img`
  width: 350px;
  @media (max-width: 767px) {
    width: 200px;
  }
`

export const FailureHeading = styled.h1`
  font-size: 25px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#1e293b')};
  @media (max-width: 767px) {
    font-size: 15px;
  }
`

export const FailureConent = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => (props.color === 'dark' ? '#606060' : ' #7e858e')};
  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const FailureRetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  padding: 10px 18px 10px 18px;
  cursor: pointer;
`
