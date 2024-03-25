import "@styles/globals.css";
import Toggle from "@components/Toggle"; 
import { DataStore } from "../Context/app-data";


export const metadata ={
    title: "QuizApp",
    description:"Practice Test to assess your tech skills"
}

const RootLayout = ({children}) => {
  return (

        <html lang="en">
            <body>
                <div className="main bg_image">
                    <div className="gradient"/>
                </div>
                <main className="app">
                    
                    <DataStore>
                        <Toggle rounded={true}/>
                        {children}
                    </DataStore>
                </main>
            </body>
    
        </html>
   
  )
}

export default RootLayout