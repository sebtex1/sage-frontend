import React from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'

const ButtonAction = ({ onClick, text, icon = false }) => {
  return (
    <Button onClick={onClick}>
      {icon ? <Icon path={mdiPlus} size={1} color="#1F1F1F" /> : null}
      {text}
    </Button>
  )
}
export default ButtonAction

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 28px;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  background-color: #bff1cd;
  border: none;
  color: #1f1f1f;
  cursor: pointer;
  transition: 0.3s;
  margin: 10px 0;
  &:hover {
    background-color: #82e39d;
  }
`
