import React from 'react'

function BulletPoints({points}) {
  return (
    <div className='w-fit h-fit flex flex-col items-start justify-start gap-2 py-8'>
        {points.map((point, index) => (
            <p key={index} className='text-sm text-dark-text font-mono '>&bull; {point.name} <a href={point.source} target='_blank' className='text-main-color font-mono lowercase hover:underline break-all'>{point.source}</a></p>
        ))}
    </div>
  )
}

export default BulletPoints