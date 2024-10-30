/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Footer() {
    return (
        <div className=' md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                
                {/* ================== section 1 ================= */}
                <div>
                    <img className='w-40 mb-5' src={assets.logo} alt="" />
                    <p className=' w-full md:h-2/3 text-gray-600 leading-6'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                
                
                {/* ================== section 2 ================= */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                
                {/* ================== section 3 ================= */}
                <div>
                <p className='text-xl font-medium mb-5 uppercase'>Get in touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+242 565 77 33</li>
                        <li>adreesEmail@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* ============  copyright      ======================= */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>lorem de claudin ttp de youtube </p>
            </div>

        </div>
    )
}

export default Footer
