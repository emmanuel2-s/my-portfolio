import React from 'react'
import Typed from 'react-typed'
import star from '../assets/img/star.png'
import profile from '../assets/img/3d-graphic-designer 1.png'
import profil from '../assets/img/handsome_man.jpg'
import starpu from '../assets/img/star pu.png'
import satagra from '../assets/img/sata gra.png'
import { AiFillEye, AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'


function Hero() {
    return (
        <>
            <div className='home'></div>
            <div className='pt-16 md:pt-0 w-full max-w-[1400px] mx-auto h-full grid md:grid-cols-2 '>
                <div className='relative'>
                    <img src={profile} alt='/' className='hidden md:block md:mr-20' />
                    <img src={starpu} alt='/' className='hidden lg:block md:absolute md:top-44 md:left-32' />
                    <img src={star} alt='/' className='hidden lg:block md:absolute md:left-72 bottom-10' />
                    <img src={satagra} alt='/' className='hidden lg:block md:absolute md:top-72 md:left-[72%] md:w-7' />
                    <img src={profil} alt='my profile picture' className='rounded-full border-8 border-[#00df9a] w-[400px] h-[400px] block md:hidden mx-auto animate-pulse' />
                </div>

                <div className='p-4 lg:pt-28'>
                    <div className='p-4 flex justify-center flex-col items-center'>
                        <h1 className='resume text-4xl md:text-4xl lg:text-5xl sm:text-5xl font-bold text-[#00df9a] uppercase text-center py-4'>HELLO,</h1>
                        <h2 className='text-center font-extrabold leading-10 text-3xl sm:text-4xl md:text-4xl text-white py-3'>I'M ENUNWA EMMANUEL.</h2>



                        <div className='text-gray-400 flex justify-center items-center font-bold pb-10 md:pb-0'>
                            <p className='typed hidden lg:block px-4 text-3xl md:text-4xl sm:text-3xl'>I ' M A</p>
                            <Typed className='typed text-3xl md:text-4xl sm:text-4xl' strings={['WEB-DEVELOPER', 'YOUTUBER', 'WRITER']} typeSpeed={120} backSpeed={130} loop />
                        </div>
                        <button className='bg-[#00df9a] text-center text-black rounded py-3 px-3 font-semibold md:mt-10 mx-auto text-lg flex justify-center items-center w-44'> <AiFillEye size={25} /> <span className='px-2'>View Resume</span></button>
                        <div className='text-white text-3xl flex pt-56'>
                            <a className='px-3 hover:scale-125 duration-300' href=''><AiFillFacebook className='h hover:text-blue-500' /></a>
                            <a className='px-3 hover:scale-125 duration-300' href=''><AiFillInstagram /></a>
                            <a className='px-3 hover:scale-125 duration-300' href=''><AiFillGithub /></a>
                            <a className='px-3 hover:scale-125 duration-300' href=''><AiFillLinkedin /></a>
                            <a className='px-3 hover:scale-125 duration-300' href=''><AiFillTwitterSquare /></a>
                            <a className='px-3 hover:scale-125 duration-300 animate-bounce' href=''><AiFillYoutube className='h hover:text-red-700' /></a>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Hero