import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Courses from './components/Courses';
import Teacher from './components/Teacher';
import About from './components/About';
import ContactUs from './components/Contact';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='teachers' element={<Teacher/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<ContactUs/>}/>
        </Routes>
      </div>    
  );
}

export default App;
