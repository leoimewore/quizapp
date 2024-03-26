"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useDataStore } from "@Context/app-data";
import { useEffect } from 'react';
import { Suspense } from "react";




const AnswerTab = ({option,index}) => {

    const letters=["A","B","C","D"]

    const {setClicked,clicked,answer,setAnswer, setSelected,checked,selected,submitClicked, correct,inCorrect,disabled, questionData}=useDataStore()


    console.log(clicked)



    const handleClick=(e)=>{
      const text=e.target?.textContent.substring(1);
      console.log(index)
      setClicked(true);
      setSelected(index)
      setAnswer(text)

    }

    useEffect(() => {
      localStorage.setItem("answer",JSON.stringify(answer))
    
    }, [answer])

    useEffect(() => {
      localStorage.setItem("selected",JSON.stringify(selected))
    
    }, [selected])

    useEffect(() => {
      setAnswer(localStorage.getItem("answer"))
    }, [])

    useEffect(() => {
      setSelected(JSON.parse(localStorage.getItem("selected")))
    }, [])
    
    

    

    
    



    
    
  return (
    
           <div className='flex'>
             <div className={`test_btn cursor-pointer border-30 ${answer===option && "clicked_btn"} ${ correct===option && "clicked_btn_green"} ${(inCorrect &&  inCorrect!==option && selected===index ) && "clicked_btn_red"}`}  onClick={disabled? null:handleClick}>
              <div className={`bg-[#F4F6FA] rounded p-1.5 w-10 h-10 ${answer===option && "clicked_avatar"} ${correct===option && "clicked_avatar_green"} ${(inCorrect &&  inCorrect!==option && selected===index ) && "clicked_avatar_red"}`}> 
                <p className={`text-[#626C7F] ${answer===option && "clicked_avatar"} ${correct===option && "clicked_avatar_green"} ${(inCorrect &&  inCorrect!==option && selected===index ) && "clicked_avatar_red"}`}>{letters[index]}</p>
              </div>
              {option}
              {submitClicked && checked && selected===index && <Image src="/assets/images/icon-correct.svg" alt="correct icon" width={40} height={40}/>}
              {submitClicked && !checked && selected===index &&<Image src="/assets/images/icon-incorrect.svg" alt="incorrect icon" width={40} height={40}/>}
            </div>

            
           </div>

            
    

   
  )
}

export default AnswerTab