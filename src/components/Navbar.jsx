/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
// import {assets}



function Navbar() {

    const navigate = useNavigate()
    const [showMenu, SetShowMenu] = useState(false)
    const [token, SetToken] = useState(true)
    return (
        <div className='flex items-center justify-between py-4 mb-5 text-sm border-b border-b-gray-400'>
            <img onClick={() => navigate('/')} className=' cursor-pointer w-44 placeholder:pointer-events-none' src= {assets.logo} alt="" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '  />
                </NavLink>
                <NavLink to= '/doctors'>
                    <li className='py-1'>All doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '  />
                </NavLink>
                <NavLink to= '/about'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '  />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '  />
                </NavLink>
            </ul>
            <div className=' flex items-center gap-4'>
                {
                    token ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt='profile'/>
                            <img className='w-2.5' src= {assets.dropdown_icon} alt='drop-down icon' />
                            <div className='absolute top-0 right-0 text-base pt-14 font-medium text-gray-600 z-20 hidden group-hover:block transition-opacity duration-200'>
                                <div className=' min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={ () => navigate('my-profile')} className='hover:textb cursor-pointer'>My Profile</p>
                                    <p onClick={ () => navigate('my-appointements')} className='hover:textb cursor-pointer'>My appointement</p>
                                    <p onClick={ () => SetToken(false)} className='hover:textb cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                    :
                        <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3  rounded-full font-light hidden md:block'>
                            create Account
                        </button>
                }
                
                <img onClick={() => SetShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

                {/* ========= mobile menu ========= */}

                <div className= {`${showMenu? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-500`}>
                    <div className='flex items-center justify-between  px-5 py-6'>  
                        <img className='w-36' src={assets.logo} alt="" />
                        <img className='w-8' onClick={() => SetShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>

                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink  onClick={() => SetShowMenu(false)} to= '/'><p className=" px-4 py-2 rounded inline-block">Home</p></NavLink>
                        <NavLink  onClick={() => SetShowMenu(false)} to= '/doctors'><p className=" px-4 py-2 rounded inline-block">All doctors</p></NavLink>
                        <NavLink onClick={() => SetShowMenu(false)} to= '/about'><p className=" px-4 py-2 rounded inline-block">About</p></NavLink>
                        <NavLink  onClick={() => SetShowMenu(false)} to= '/contact'><p className=" px-4 py-2 rounded inline-block">Contact</p> </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
