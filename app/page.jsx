"use client"
import Subject from "@components/Subject"
import { useEffect } from "react"




const Home = () => {

  return (
    <section className='w-full flex-center flex-col'>
        <div className='flex flex-col'>
            <h1 className='text-6xl font-extralight'>Welcome to the <span className='font-bold'>Frontend Quiz!</span></h1>
            <p className='mt-4 italic text-sm leading-loose text-[#626C7F]'>Pick a subject to get started</p>
        </div>

        <div className='flex flex-col mt-10 gap-2'>
         
         <Subject/>
         


            
        </div>

    </section>
  )
}

export default Home