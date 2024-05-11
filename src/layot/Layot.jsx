import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layot() {
  return (
    <div className='w-full bg-black'>
        <div className="navbar bg-base-300">
  <button className="btn btn-ghost text-xl"> <img className='w-20' src='https://i.ibb.co/bHZyGf2/image.png'/> Canada visa check </button>
</div>
<Outlet></Outlet>

<img className="h-auto max-w-full" src="https://i.ibb.co/QFj4trR/image.png" alt="image description"/>

    </div>
  )
}
