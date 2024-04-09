// USUALLY program runs on the SERVER side
// load faster, are seo friendly, gives access to resources usually unavailable, 
// hides sensitive data from the client, more secure against XSS attacks, imoproved developer experience

// HOWEVER sometimes we want to use Client side
// not as interactive, 'useState' hook and 'useEffect' hook

// to use the client side instead of the server side:
'use client'

import {useState} from 'react';
import Link from "next/link"
import React from 'react'

const Header = () => {
  return (
    // css name is 'header' with lowercase h so the classname has to be header
    <header className="header">
        <div className="container">
            <div className="logo">
                <Link href = "/">App directory</Link>
            </div>

            <div className="links">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/about/team'>Team</Link>
                <Link href='/code/repos'>Code</Link>
            </div>
        </div>
    </header>
  )
}

export default Header