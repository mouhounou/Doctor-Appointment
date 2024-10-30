/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

export default function MyProfile() {

    const [userData, setUserData] = useState({
        name: 'Edward Vincent',
        email: 'richardjameswap@gmail.com',
        image: assets.profile_pic,  
        phone: '+1 123 456 7890',
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Church Road, London'
        },
        gender: 'Male',
        dob: '2000-01-20'
    }); 

    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className='fmax-w-lg flex flex-col gap-2 text-sm'>
            <img className='w-36 rounded' src={userData.image} alt="" />

            {
                isEdit 
                ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' value={userData.name} onChange={(e) => setUserData(prev => ({...prev, name: e.target.value}))} type="text" />
                : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
            }

            <hr className='bg-zinc-400 h-[1px] border-none' />

            <div className='grid grid-cols-1'>
                <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
                <div className=' grid grid-cols-[1fr_3fr] mt-3 text-neutral-700'>
                    <p className='font-medium'>Email id :</p>
                    <p className='text-blue-500'>{userData.email}</p>
                    <p  className='font-medium'>Phone :</p>


                    {
                        isEdit 
                        ? <input className='bg-gray-100 max-w-52' value={userData.phone} onChange={(e) => setUserData(prev => ({...prev, phone: e.target.value}))} type="text" />
                        : <p className='text-blue-400'>{userData.phone}</p>
                    }

                    <p className='font-medium'>Address :</p>
                    {
                        isEdit 
                        ? <p className=''>
                            <input className='bg-gray-100 max-w-52' onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line1: e.target.value}}))} value={userData.address.line1} type="text" />
                            <br />
                            <input className='bg-gray-100 max-w-52' onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line2: e.target.value}}))} value={userData.address.line2} type="text" />
                          </p>
                        : <p className='text-gray-500'>
                            <span>{userData.address.line1}</span>
                            <br />
                            <span>{userData.address.line2}</span>
                          </p>
                    }
                </div>
            </div>

            <div>
                <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
                <div className=' grid grid-cols-[1fr_3fr] gray-y-2.5 text-neutral-700'>
                    <p className=' font-medium'>Gender :</p>
                    {
                        isEdit
                        ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        : <p>{userData.gender}</p>
                    }

                    <p className='font-medium'>Birthday :</p>
                    {
                        isEdit
                        ? <input className='bg-gray-100 max-w-52' type="date" onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob} />
                        : <p className='text-gray-400'>{userData.dob}</p>
                    }
                </div>
            </div>

            <div className='mt-10' >
                {
                    isEdit 
                    ? <button  className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500' onClick={() => setIsEdit(false)}>Save information</button>
                    : <button  className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500'  onClick={() => setIsEdit(true)}>Edit</button>
                }
            </div>
        </div>
    );
}
