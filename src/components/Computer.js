import React from 'react'

function Computer() {
  return (
    <div>
      <select className='drop-menu'>
        <option value="password">Password</option>
        <option value="printer">Printer</option>
        <option selected value="connection">Connection</option>
        <option value="lost-file">Lost File</option>
      </select>

    </div>
  )
}

export default Computer