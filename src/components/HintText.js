import React from 'react'
import styled from 'styled-components'

function HintText({ text }) {
  return <Hint dangerouslySetInnerHTML={{ __html: text }} />
}
export default HintText

const Hint = styled.p`
  color: #7c7c7c;
  font-size: 12px;
  margin: 5px 0;
  background-color: #ebebeb;
  border-radius: 5px;
  padding: 10px;
`
