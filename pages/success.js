import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {BsBagCheckFill} from 'react-icons/bs';

import { useStateContext } from '../context/StateContext'

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    },[])

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'><BsBagCheckFill/></p>
            <h2>Thank you for your order!</h2>
            <p className='email-msg'>Check your email inbox for the reciept</p>
            <p className='description'>
                If you have any questions, pleasse email
                <a className='email' href='mailto:dewan.mizanur911@gmail.com'>
                dewan.mizanur911@gmail.com
                </a>
            </p>
            <Link href="/">
                <button type='button' width="300px" className='btn'>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success