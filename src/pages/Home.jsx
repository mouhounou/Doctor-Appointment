/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctor from '../components/TopDoctor'
import Banner from '../components/Banner'

function Home() {
    return (
        <>
            <Header/>
            <SpecialityMenu/>
            <TopDoctor/>
            <Banner/> 
        </>
    )
}

export default Home
