import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
       <h1>Welcome to Next.js Online Store</h1>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        about
      </Link>
      <Link href="/products">
        Products
      </Link>
    </div>
  )
}

export default Navbar
