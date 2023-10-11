import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'

function RouterPage() {
    return (
        <div>
            <NavBar />
            <Hero />
            <About />
            <Skill />
        </div>
    )
}

export default RouterPage