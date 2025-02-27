/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'



function MyAppointement() {

    const {doctors} = useContext(AppContext) 

    return (
        <div>
            <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>
                My Appointments
            </p>

            <div>
                {
                    doctors.slice(0, 3).map((item, index) =>(
                        <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b'>
                            <div>
                                <img className='w-32 bg-indigo-50' src={item.image} alt="" />
                            </div>

                            <div className='flex-1 text-sm text-zinc-600'>
                                <p className=' text-neutral-800 font-semibold '>{item.name}</p>
                                <p>{item.speciality}</p>
                                <p className='text-zinc-700 font-medium mt-1'>Address</p>
                                <p  className='text-xs'>{item.address.line1}</p>
                                <p  className='text-xs'>{item.address.line2}</p>
                                <p className='text-xs mt-1'>
                                    <span className='text-xs text-neutral-700 font-medium' >Date & time</span>
                                    25, july, 2024 | 8 : 30 PM
                                </p>
                            </div>

                            <div></div>
                            <div className='flex flex-col gap-2 justify-end'>
                                <button className=' text-sm text-stone-500 text-center sm:mmin-w-48 py-2 rounded border hover:bg-primary hover:text-white transition-all duration-500'>Pay online</button>
                                <button className=' text-sm text-stone-500 text-center sm:mmin-w-48 py-2 rounded border hover:bg-red-600 hover:text-white transition-all duration-500'>Cancel appointment </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyAppointement
