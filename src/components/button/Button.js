import React from 'react'
import S from "../../elements/styledComponents/"

const Button = ({ children }) => {
  return (
    <S.PrimaryButton>
      {children}
    </S.PrimaryButton>
  )
}

export default Button