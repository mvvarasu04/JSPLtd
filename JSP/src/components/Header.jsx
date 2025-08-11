import React from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../constants'

const header = () => {
  return (
    <header className='bg-violet-800 text-white p-4 shadow-md'>
        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconURL}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
    </header>
  )
}

export default header