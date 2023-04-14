import React from 'react'

export const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div className='footer_container'>
        <p>copyright © {currentYear}</p>
    </div>
  )
}
