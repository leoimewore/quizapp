"use client"
import cx from "classnames"
import Image from "next/image"
import { useDataStore } from "@Context/app-data"
import Jsimage from "./jsImage"
import { useEffect } from "react"

const Toggle = ({rounded =false}) => {

    const{testName,showSubjectName,setShowSubjectName,setTestName}=useDataStore()


    // useEffect(() => {
    //     const test = window.localStorage.getItem("TEST_SUBJECT")
    //     setTestName(JSON.parse(test))
    //     setShowSubjectName(JSON.parse(window.localStorage.getItem("SHOW_SUBJECT_NAME")))
      
    // }, [])

    console.log(showSubjectName)


    useEffect(() => {
      localStorage.setItem("showtoggleInfo",showSubjectName )
    
    }, [showSubjectName])
    useEffect(() => {
        localStorage.setItem("test",testName)
      
      }, [testName])

      useEffect(() => {
       setShowSubjectName(localStorage.getItem("showtoggleInfo"))
      }, [])

      useEffect(() => {
        let storedTestName=localStorage.getItem("test")
        setTestName(storedTestName)
      }, [])
      
      
    
    



    const sliderCX= cx("slider", {
        "rounded":rounded
    })
  return (

    <nav className="flex flex-between w-full mb-16 pt-4 pb-5 items-center">
            {showSubjectName&&<>
    <div className={`${testName.toLowerCase()+"-bg"} rounded`}>
              <Image
                src={`/assets/images/icon-${testName.toLowerCase()}.svg`}
                width={50}
                height={50}
                alt="jsIcon"
                    
              />
    </div>
                <h1 className=" text-dark-navy font-bold text-xl ml-5">{testName}</h1>
            </>}
      
        <div className="flex flex-between w-full gap-0.5 items-center justify-end">
            <Image
                src="/assets/images/icon-sun-dark.svg"
                width={30}
                height={30}
                alt="sunicon"
            />
            <label className="switch">
                <input type='checkbox' className="switch-input"/>
                <span className={sliderCX}/>
            </label>
    
            <Image
                src="/assets/images/icon-moon-dark.svg"
                width={30}
                height={30}
                alt="moonicon"
            />
        </div>
    </nav>
  )
}

export default Toggle