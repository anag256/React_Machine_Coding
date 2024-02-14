import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme-context'

function NavBar() {
    const {theme,toggleTheme}=useTheme();
    console.log(theme)
  return (
    <nav className='navbar'>
        <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <div className='mode-switch'>
            <label>
                <input type="checkbox" onChange={toggleTheme} checked={theme==='dark'}>

                </input>
                <span className='slider round'></span>
            </label>
        </div>
        </div>

    </nav>
  )
}

export default NavBar