import React from 'react'
import star from '../assets/img/star.png'
import starr from '../assets/img/starr.png'
import profil from '../assets/img/handsome_man.jpg'
import { AiFillProfile, AiOutlineDownload } from 'react-icons/ai'



function About() {
    return (
        <>
            <div className='w-full py-16 bg-white'>
                <div className='max-w-[1240px] mx-auto md:h-[500px]'>
                    <h1 className='text-black text-left text-4xl md:text-4xl font-extrabold'>About Me</h1>
                    <div className='grid md:grid-cols-2 py-10 md:gap-x-[500px] px-3 '>
                        <div className='shadow-lg md:w-[730px] px-6 py-4 h-96'>
                            <div className='flex justify-start py-3'>
                                <AiFillProfile className='f' size={40} />
                                <h3 className='text-[#00df9a] text-4xl md:text-3xl font-bold px-4 '>Key summary</h3>
                            </div>
                            <p className='f font-sans font-medium flex flex-wrap leading-6 w-full md:w-[700px]'>Detail-oriented and creative Front-End Developer with three years of hands-on experience in crafting visually
                                appealing and responsive web applications. Proficient in HTML, CSS3, JavaScript, ReactJS, Tailwind,
                                Bootstrap and Node.js. Adept at translating design concepts into efficient, user-friendly interfaces.
                            </p>
                            <p className='font-sans font-medium md:w-[700px] w-full'>I'm from Anambra State, but base in Lagos State Nigeria.
                            </p>

                            <button className='text-[#00df9a] text-center bg-black rounded py-3 px-3 font-semibold mt-10 text-lg flex justify-center items-center mb-10 mx-auto md:mx-0'> <AiOutlineDownload size={25} /> <span className='px-2'>Download Resume</span></button>

                        </div>
                        <div className='py-10 md:py-0'>
                            <img src={profil} alt='my profile picture' className='md:w-[350px] md:h-[400px] rounded-lg w-full border-l-8 border-[#00df9a] border-r-8 shadow-lg' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About