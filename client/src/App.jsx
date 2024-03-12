
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/Header/header"
import Courses from "./components/Courses/courses"

function App() {

  return (
    <>
         <BrowserRouter>
         <Header/>
            <Routes>
                <Route path="/course" element={<Courses/>}/>
            </Routes>
         
         </BrowserRouter>
    </>
  )
}

export default App
