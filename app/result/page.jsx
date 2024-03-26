"use client"
import { useDataStore } from "@Context/app-data";
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const Result = () => {

    const{testName,setTestname,showSubjectName,setShowSubjectName,data,score,setIdx,setScore}=useDataStore()

    const router=useRouter()

    const handleStart=()=>{
        setShowSubjectName(false)
        // setIdx(0)
        // setScore(0)
        // setTestname("")

        router.push("/")
    }


    useEffect(() => {
      localStorage.setItem("score", JSON.stringify(score))
    }, [score])

    useEffect(() => {
      setScore(JSON.parse(localStorage.getItem("score")))
    }, [])
    
  return (
    <section className='w-full flex-center flex-col'>
    <div className='flex flex-col'>
        <h1 className='text-6xl font-extralight'>Quiz Completed <span className='font-bold'>You Scored...</span></h1>
    </div>

    <div className='flex flex-col justify-between mt-10 gap-2 bg-white pt-7 rounded z-40 '>

    <div className="flex justify-center flex-center items-center">
        <div className={`${testName.toLowerCase()+"-bg"} rounded`}>
                  <Image
                    src={`/assets/images/icon-${testName.toLowerCase()}.svg`}
                    width={50}
                    height={50}
                    alt={`${testName}`}     
                  />
        </div>
        <h1 className=" text-dark-navy font-bold text-xl ml-5">{testName}</h1>
    </div>

        <div className="flex flex-col justify-center mt-8">
            <p className="text-8xl text-center" >{score}</p>
            <span className="mt-4 italic text-sm leading-loose text-[#626C7F] text-center mt-8">out of 10</span>
        </div>
         
    </div>
    <div className="flex flex-col mt-10 gap-2">
             <button className="next-submit_btn" onClick={handleStart} >Play Again</button>
             

      </div>

    

</section>
  )
}

export default Result