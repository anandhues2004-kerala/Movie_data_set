
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from '../componets/Home'

function NavLayout() {
  return (
    <main className="min-h-screen bg-black text-white">

      <nav className="bg-gray-900 px-8 py-5 flex justify-center">
       
  <div className="flex gap-6">
  <Link to="/" className="hover:text-pink-500"></Link>
  </div>
      
      </nav>

      <Outlet />

      <footer className="bg-gray-900 mt-10 px-8 py-8 text-center">
        <p className="text-gray-400">
          Your favorite movies in one place.
        </p>
      </footer>

    </main>
  )
}

export default NavLayout

