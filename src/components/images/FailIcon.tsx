import React from 'react'
import failImage from '../../style/images/fail.svg'


const FailIcon: React.FC<{}> = () => {
  return (
    <div>
      <img src={failImage} alt="icon"/>
    </div>
  )
}

export default FailIcon
