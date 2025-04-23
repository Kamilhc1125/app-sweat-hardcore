import React from 'react'

const Debug = () => {

  const theme = document.documentElement.getAttribute("data-theme");

  return (
    <div>
      <p className='test'>{theme} theme</p>
      
    </div>
  )
}

export default Debug
