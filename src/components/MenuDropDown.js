import React from 'react'
import styled from 'styled-components'

function MenuDropDown({ menu = [], callback }) {
  const [rowIndex, setRowIndex] = React.useState(0)
  return (
    <div>
      {menu.length > 0
        ? menu.map((row, indexRow) => (
            <div key={indexRow}>
              <Category
                style={{
                  backgroundColor: rowIndex === indexRow ? '#ccc' : '',
                  borderLeft: rowIndex === indexRow ? '5px solid #007E45' : '',
                }}
                onClick={() => {
                  setRowIndex(indexRow)
                }}
              >
                {row.name}
              </Category>
              <DivChoices>
                {rowIndex === indexRow
                  ? row.choices?.map((choice, indexChoice) => (
                      <p
                        key={indexChoice}
                        onClick={() => {
                          callback(choice.value)
                        }}
                      >
                        {choice.name}
                      </p>
                    ))
                  : null}
              </DivChoices>
            </div>
          ))
        : null}
    </div>
  )
}

export default MenuDropDown

const Category = styled.h3`
  margin: 10px 0;
  padding: 2px 6px;
  cursor: pointer;
  border-radius: 5px;
`

const DivChoices = styled.div`
  margin-left: 20px;
  cursor: pointer;
`
