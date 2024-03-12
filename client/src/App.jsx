
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/Header/header"
import Courses from "./components/Courses/courses"
import Aboutus from "./components/Aboutus/aboutus"
import Careers from "./components/Careers/careers"
import Contactus from "./components/Contactus/contactus"
import Blogs from "./components/Blogs/blogs"
import Signup from "./components/Authentication/Signup"

function App() {

  return (
    <>
         <BrowserRouter>
         <Header/>
            <Routes>
                <Route path="/Courses" element={<Courses/>}/>
                <Route path="/Aboutus" element={<Aboutus/>}/>
                <Route path="/Courses" element={<Courses/>}/>
                <Route path="/Careers" element={<Careers/>}/>
                <Route path="/Contactus" element={<Contactus/>}/>
                <Route path="/Blogs" element={<Blogs/>}/>
                <Route path="/Signin" element={<Signup/>}/>
            </Routes>
         
         </BrowserRouter>
    </>
  )
}

export default App
