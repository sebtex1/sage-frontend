import React from 'react'
import styled from 'styled-components'

function GroupButton({ buttons, defaultButton }) {
  return (
    <ButtonGroup>
      {buttons.map((button, index) => (
        <Button
          key={index}
          style={{
            backgroundColor: defaultButton === button.text ? '#82e39d' : '',
          }}
          onClick={button.onClick}
        >
          {button.text}
        </Button>
      ))}
    </ButtonGroup>
  )
}
export default GroupButton

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 28px;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  background-color: #d9d9d9;
  border: none;
  color: #1f1f1f;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 10px 0 0;
  &:hover {
    background-color: #bfbfbf;
  }
`
