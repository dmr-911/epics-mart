import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  const {smallText, midText, buttonText, largeText1, image, product, desc} = heroBanner;
  return (
    <div className='hero-banner-container'>
      <p className='beats-solo'>{smallText}</p>
      <h3 className=''>{midText}</h3>
      <h1>{largeText1}</h1>
      <img src={urlFor(image)} alt="headphones" className='hero-banner-image'/>

      <div>
        <Link href={`produtct/${product}`}>
          <button type='button'>{buttonText}</button>
        </Link>
        <div className='desc'>
            <h5>Description</h5>
            <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner