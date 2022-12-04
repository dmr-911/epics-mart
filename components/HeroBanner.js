import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <p className='beats-solo'>Small text</p>
      <h3 className=''>MID TEXT</h3>
      <img src='' alt="headphones" className='hero-banner-image'/>

      <div>
        <Link href={`produtct/ID`}>
          <button type='button'>Button text</button>
        </Link>
        <div className='desc'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner