import React from 'react'

export default function layout( {children}: {children: React.ReactNode}) {
  return (
    <div>
        <p className='text-3xl'>DASHBOARD</p>
        {children}
    </div>
  )
}
