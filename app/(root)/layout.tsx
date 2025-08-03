import React from 'react'

export default function layout( {children}: {children: React.ReactNode} ) {
  return (
    <div>
        <h1 className='text-3xl'>NavBar</h1>
        {children}
    </div>
  )
}
