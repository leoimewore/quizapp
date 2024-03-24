"use client";

import React, { createContext, useContext, useState} from "react";
import list from "@public/assets/data.json"






const DataContext = createContext();


export const DataStore = ({ children }) => {


  

    

  

    

    const [testName,setTestName]=useState(()=>{
        let storedTestName=localStorage.getItem("test")

        return storedTestName || ""
    })
    const [data,setData]=useState(list[0].quizzes)
    const [idx,setIdx]=useState((JSON.parse(localStorage.getItem("idx")))||0)
    const [showSubjectName,setShowSubjectName]= useState(localStorage.getItem("showtoggleInfo") ||false)
    const [testQuestion, setTestQuestion] = useState("")
    const [options, setOptions] = useState([])
    const [answer, setAnswer] = useState(localStorage.getItem("answer")||"")
    const [clicked, setClicked] = useState(JSON.parse(localStorage.getItem("clicked")) || false)
    const [selected, setSelected] = useState(JSON.parse(localStorage.getItem("selected"))||"")
    const [checked,setChecked]=useState(JSON.parse(localStorage.getItem("checked")) ||false)
    const [correct, setCorrect] = useState( JSON.parse(localStorage.getItem("correct"))||"")
    const [inCorrect, setInCorrect] = useState( JSON.parse(localStorage.getItem("inCorrect"))||"")
    const [questionData, setQuestionData] = useState(()=>{
        const storeddata=localStorage.getItem("questions")

       return JSON.parse(storeddata) || {question:"",
        multiChoiceOptions:[],
        answer:""
    } 
    })
    const [submitClicked, setSubmitClicked] = useState(JSON.parse(localStorage.getItem("submit"))|| false)
    const [error,setError]=useState( JSON.parse(localStorage.getItem("error"))||false)
    const [disabled, setDisabled] = useState(false);
    const [score,setScore]=useState(JSON.parse(localStorage.getItem("score"))||0)


    const incIdx=()=>{
        setIdx((prevIdx)=> prevIdx+1)
    }

    const calcScore=()=>{
        setScore((prevScore)=> prevScore+1)
    }


    const Submit=(option)=>{

        if(clicked!==false && answer===option){
            setCorrect(!correct)

        }else if(clicked!==false && answer!==option){
            setCorrect(!false)

        }

    }

    

  


    return (
        <DataContext.Provider
            value={{
                   testName,
                   setTestName,
                   data,
                   setData,
                   idx,
                   setIdx,
                   showSubjectName,
                   setShowSubjectName,
                   testQuestion, 
                   setTestQuestion,
                   setOptions,
                   options,
                   incIdx,
                   answer,
                   setAnswer,
                   clicked,
                   setClicked,
                   selected, 
                   setSelected,
                   checked,
                   setChecked,
                   correct,
                   setCorrect,
                   questionData,
                   setQuestionData,
                   submitClicked, 
                   setSubmitClicked,
                   error,
                   setError,
                   inCorrect,
                   setInCorrect,
                   disabled, 
                   setDisabled,
                   calcScore,
                   score

                
                
                   }}


        >

            {children}

        </DataContext.Provider>
    )

}

export const useDataStore=()=>useContext(DataContext)
