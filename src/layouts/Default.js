import React from 'react'
import Toolbar from '../components/Toolbar'

function Default({ children }) {
  return (
    <>
      <div>
        <Toolbar />
      </div>
      <main>{children}</main>
    </>
  )
}
export default Default
