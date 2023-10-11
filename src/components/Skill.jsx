import React from 'react'

function Skill() {
    return (
        <>
            <div className='text-white max-w-[1240px] mx-auto py-10 box-border w-full px-3'>
                <h1 className='text-4xl text-[#00df9a]'>Skills</h1>
                <div className='grid md:grid-cols-2 md:gap-32'>
                    <div>
                        <div className='py-2'>
                            <p>HTML</p>
                            <div className='bg-gray-600 md:[40%] rounded-md'>
                                <div className='bg-[#00df9a] rounded-l w-[95%] text-right px-2'>95%</div>
                            </div>
                        </div>
                        <div className='py-2'>
                            <p>CSS</p>
                            <div className='bg-gray-600 md:w-[90%] rounded-md'>
                                <div className='bg-[#04AA6D] rounded-l w-[95%] text-right px-2'>95%</div>
                            </div>
                        </div>
                        <div className='py-2'>
                            <p>JavaScript</p>
                            <div className='bg-gray-600 md:w-[90%] rounded-md'>
                                <div className='bg-[#808080] rounded-l w-[65%] text-right px-2'>65%</div>
                            </div>
                        </div>
                        <div className='py-2'>
                            <p>React Js</p>
                            <div className='bg-gray-600 md:w-[90%] rounded-md'>
                                <div className='b bg-[#808080] rounded-l md w-[75%] text-right px-2'>75%</div>
                            </div>
                        </div>
                        <h4 className='text-[#00df9a] text-lg'>Version Controls & Tech Tool</h4>
                        <p>Git & GitHub, Visual Studio Code, NPM</p>
                    </div>

                    <div>
                        <div className='py-2'>
                            <p>Bootstrap</p>
                            <div className='bg-gray-600 md:w-[90%] rounded-md'>
                                <div className='bg-[#00df9a] rounded-l w-[95%] text-right px-2'>95%</div>
                            </div>
                        </div>
                        <div className='py-2'>
                            <p>TailWind</p>
                            <div className='bg-gray-600 md:w-[90%] rounded-md'>
                                <div className='bg-[#04AA6D] rounded-l w-[95%] text-right px-2'>95%</div>
                            </div>
                        </div>

                        <div className='py-2'>
                            <p>Node Js</p>
                            <div className='bg-gray-600 md:w-[90%] rounded-md'>
                                <div className='bg-[#00df9a] rounded-l w-[15%] text-right px-2'>15%</div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-[#00df9a] text-lg py-3'>Miscellaneous</h4>
                            <ul>
                                <li>Strong teamwork, communication skills, Leadership Ability, Fluent in English
                                </li>
                                <li>Fast learner, enthusiastic about personal growth and development</li>
                                <li>Great graphic design skills with Canva
                                </li>
                                <li>Results-driven, consistently delivers and exceeds expectations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;