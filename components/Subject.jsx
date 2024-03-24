import Link from "next/link";
import Image from "next/image";
import { useDataStore } from "@app/Context/app-data";

const Subject = () => {

  const {setTestName,setShowSubjectName}=useDataStore()
    let subjects=["HTML", "CSS","JavaScript","Accessibility"]


    const handleSelect=(e)=>{
      setTestName(e.target.text)
      setShowSubjectName(true)
    }
  return (
    <>
    {subjects.map((ele,index)=><div className='flex'>
           <Link href="/testpage" className='test_btn' onClick={handleSelect}>
            <div className={`${subjects[index].toLowerCase()+"-bg"} rounded`}>
              <Image
                src={`/assets/images/icon-${subjects[index].toLowerCase()}.svg`}
                width={40}
                height={40}
                alt="htmlIcon"
                title=""    
              />
            </div>
            {ele}</Link>
         </div>)}
    </>
  )
}

export default Subject