"use client";

import React, { createContext, useContext, useState} from "react";
import list from "@public/assets/data.json"






const DataContext = createContext();


export const DataStore = ({ children }) => {


  

    

  

    

    const [testName,setTestName]=useState(
        ""
    )
    const [data,setData]=useState(list[0].quizzes)
    const [idx,setIdx]=useState(0)
    const [showSubjectName,setShowSubjectName]= useState(false)
    const [testQuestion, setTestQuestion] = useState("")
    const [options, setOptions] = useState([])
    const [answer, setAnswer] = useState("")
    const [clicked, setClicked] = useState(false)
    const [selected, setSelected] = useState("")
    const [checked,setChecked]=useState(false)
    const [correct, setCorrect] = useState("")
    const [inCorrect, setInCorrect] = useState("")
    const [questionData, setQuestionData] = useState(
         {question:"",
        multiChoiceOptions:[],
        answer:""
    })
    const [submitClicked, setSubmitClicked] = useState(false)
    const [error,setError]=useState(false)
    const [disabled, setDisabled] = useState(false);
    const [score,setScore]=useState(0)


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
