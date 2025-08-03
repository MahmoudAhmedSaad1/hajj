import React from 'react'
import { Link } from 'react-router-dom'
export default function LinksFooter() {
  return <>
    <nav className="flex flex-wrap gap-6 text-sm sm:text-base font-medium">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="programs" className="hover:text-gray-300">
            Programs
          </Link>
          <Link to="hotels" className="hover:text-gray-300">
            Hotels
          </Link>
          <Link to="aboutus" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="contactus" className="hover:text-gray-300">
            Contact Us
          </Link>
        </nav>
  </>
}
