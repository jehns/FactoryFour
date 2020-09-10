import React from 'react'
import styled from 'styled-components'
import successImage from '../../style/images/success.svg'


const Wrapper = styled.div`
  height: 40px;
  width: 40px;
`

const SuccessIcon: React.FC<{}> = () => {
  return (
    <Wrapper>
      <img src={successImage} alt="icon"/>
    </Wrapper>
  )
}

export default SuccessIcon
