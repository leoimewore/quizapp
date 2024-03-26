"use client";
import { useDataStore } from "@Context/app-data";
import { useEffect } from "react";
import list from "@public/assets/data.json";
import AnswerTab from "@components/AnswerTab";
import { Suspense } from "react";
import Slider from "@components/Slider";
import Image from "next/image"
import { useRouter } from 'next/navigation';



const TestPage = () => {

  const router=useRouter()

  const { testName,
          data,
          idx,
          setIdx,
          error, 
          setError,
          setCorrect,
          incIdx,
          setClicked
          ,clicked,
          setInCorrect,
          answer,
          checked,
          setChecked,
          questionData,
          setQuestionData,
          submitClicked, 
          setSubmitClicked,
          disabled, 
          setDisabled,
          calcScore,
          correct,
          inCorrect
        }  =useDataStore();

        console.log(data)





  const getQuestions=()=>{
     const filteredData= list[0].quizzes.filter((ele)=>ele.title===testName)
     const question= filteredData[0]?.questions[idx].question
     const multiChoiceOptions= filteredData[0]?.questions[idx].options
     const answer=filteredData[0]?.questions[idx].answer

     return {
      question: question,
      multiChoiceOptions: multiChoiceOptions,
      answer:answer

     }
     
   
    }

    useEffect(()=>{
      setQuestionData(getQuestions())

    },[])

    useEffect(() => {

      const storeddata=localStorage.getItem("questions")

      if(storeddata){
        setQuestionData(JSON.parse(storeddata))
      } 
    }, [])

    useEffect(() => {
      setQuestionData(getQuestions())
      
    }, [idx])


    const handleSubmit=(e)=>{
      e.preventDefault()


      

      if(clicked && answer===questionData.answer && submitClicked===false ){
        setError(false)
        setChecked(!checked)
        setSubmitClicked(!submitClicked)
        setCorrect(questionData.answer)
        setDisabled(!disabled)
        calcScore()
        if(idx===9){
          router.push("/result")
        }

      }else if(clicked&& answer!==questionData.answer &&submitClicked===false ){
        setError(false)
        setChecked(false)
        setSubmitClicked(!submitClicked)
        setInCorrect(questionData.answer)
        setDisabled(!disabled)
        if(idx===9){
          router.push("/result")
        }

      } else if(clicked===false){
          setError(!error)

      } else if(submitClicked===true){
        //it means i am on Next Question

        
        incIdx()
        setError(false)
        setClicked(false)
        setChecked(false)
        setSubmitClicked(false)
        setCorrect("")
        setInCorrect("")
        setDisabled(false)
        
      }
      


    }
    

  

  
    
 





 useEffect(() => {
   localStorage.setItem("questions", JSON.stringify(questionData))
 }, [questionData])

 useEffect(() => {
   localStorage.setItem("idx",JSON.stringify(idx))
 
   
 }, [idx])

 useEffect(() => {
  localStorage.setItem("error",JSON.stringify(error))

  
}, [error])

useEffect(() => {
  localStorage.setItem("checked",JSON.stringify(checked))

  
}, [checked])

useEffect(() => {
  localStorage.setItem("submit",JSON.stringify(submitClicked))

  
}, [submitClicked])

useEffect(() => {
  localStorage.setItem("inCorrect",JSON.stringify(inCorrect))

  
}, [inCorrect])

useEffect(() => {
  localStorage.setItem("correct",JSON.stringify(correct))

  
}, [correct])

useEffect(() => {
  localStorage.setItem("clicked",JSON.stringify(clicked))

  
}, [clicked])


useEffect(() => {
  setClicked(JSON.parse(localStorage.getItem("clicked")))
}, [])

useEffect(()=>{

  setCorrect(JSON.parse(localStorage.getItem("correct")))

},[])

useEffect(() => {
  setInCorrect(JSON.parse(localStorage.getItem("inCorrect")))
}, [])

useEffect(() => {
  const storeddata=localStorage.getItem("questions")

  setQuestionData(JSON.parse(storeddata))
  
}, [])



 


 


//  console.log(questionData)
 


  useEffect(() => {
    const disableBackNavigation = () => {
      window.history.forward(); // Move forward in history
    };

    // Push a state to the history stack
    window.history.pushState(null, null, window.location.pathname);

    // Add event listener for when the user tries to navigate back
    window.addEventListener('popstate', disableBackNavigation);

    return () => {
      // Clean up the event listener
      window.removeEventListener('popstate', disableBackNavigation);
    };
  }, []);


  useEffect(() => {

    setIdx((JSON.parse(localStorage.getItem("idx"))))
    
  }, [])

  useEffect(() => {
   setChecked(JSON.parse(localStorage.getItem("checked")))
  }, [])

  useEffect(() => {
   setSubmitClicked(JSON.parse(localStorage.getItem("submit")))
  }, [])

  useEffect(()=>{
    setError(JSON.parse(localStorage.getItem("error")))
  },[])

 
  
  
  
  
  

  



  
  



    
  return (
      <section className='w-full flex-center flex-col'>
      <div className='flex flex-col'>
          <div className='flex flex-col'>
      
              <span className='mt-4 italic text-sm leading-loose text-[#626C7F]'>Question {idx+1} of 10</span>
              <p className='mt-4 text-dark-navy font-semibold text-xl tracking-tighter'>
                  {questionData.question}
              </p>
              
          </div>
          
         
      </div>

      <Slider/>
  
      <div className='flex flex-col mt-10 gap-2'>
        {questionData.multiChoiceOptions?.map((option,index)=>
        
          
            <AnswerTab
              key={index}
              option={option}
              index={index}
              answer={answer}
              toggled={Math.floor(Math.random() * 100) + 1}
              
            />
          
       
        )}
      </div>

      <div className="flex flex-col mt-10 gap-2">
             <button className="next-submit_btn" onClick={handleSubmit}>{submitClicked?"Next Question": "Submit"}</button>
             

      </div>
      {error &&<div className="flex items-center gap-2 justify-center mt-5">
        <Image src="/assets/images/icon-incorrect.svg" alt="incorrect icon" width={20} height={20}/>
        <span className=" text-red-500 text-xs font-normal">Please select an answer</span>
      </div>}
     
  </section>
  )
}

export default TestPage;