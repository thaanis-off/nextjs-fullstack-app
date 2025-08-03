import React from 'react'

export default function page({params}: {params: {id: string} }) {
  const { id } = params;
  return (
    <h1 className='text-3xl'>User Profile: {id}</h1>
  )
}
