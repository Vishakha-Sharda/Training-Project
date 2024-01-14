import React from 'react';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Register from "./pages/Register";
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Component/Footer';
import Login from "./pages/Login";
import BookAppointment from './Component/BookAppointment';
import Cardiology from './Specialities/Cardiology';
import Neurology from './Specialities/Neurology';
import Dermatology from './Specialities/Dermatology';
import Nephrology from './Specialities/Nephrology';
import Dentistry from './Specialities/Dentistry';
import ENT from './Specialities/ENT';
import DoctorConsultationForm from './pages/DoctorConsultationForm';
import Testimonail from './pages/Testimonail';
import Team from "./pages/Team";
import Angioplasty from './Procedures/Angioplasty';
import Endoscopy from './Procedures/Endoscopy';
import Neurosurgery from './Procedures/Neurosurger';
import Laminectomy from './Procedures/Lamino';
import KneeReplacement from './Procedures/Knee_Replacement';
import StrokeSurgery from './Procedures/Stroke';
import CataractSurgery from './Procedures/Cataract';
import Colonoscopy from './Procedures/Clonoscopy';
import Mission from './pages/Mission';
import History from './pages/History';
import Checkup from './pages/Checkup';
import View from './pages/View_Record';
import { AuthProvider} from './pages/AuthContext'; 
import Buy from './pages/Buy';
import Signup from './pages/Signup';
import Upload from './pages/Upload';
import CartPage from './pages/CartPage';
import ReceiptPage from './pages/ReceiptPage';
import Chatbot from './pages/Chatbot';

function App() {
    return (
<div className='App'>
<AuthProvider>
<BrowserRouter>
<Navbar/>
  <Routes>
        <Route path='/home' element={<Home/>}  />
       <Route path="/register" element={<Register/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/bookappointment" element={<BookAppointment/>} />
       <Route path = "/cardiology" element={<Cardiology /> } />
       <Route path = "/neurology" element={<Neurology /> } />
       <Route path = "/dermatology" element={<Dermatology  /> } />
       <Route path = "/nephrology" element={<Nephrology  /> } />
       <Route path = "/dentistry" element={<Dentistry  /> } />
       <Route path = "/ent" element={<ENT  /> } />
       <Route path = "/doctorconsultationform" element={<DoctorConsultationForm/> } />
       <Route path = "/testimonial" element={<Testimonail/> } />
       <Route path = "/team" element={<Team/> } />
       <Route path = "/angioplasty" element={<Angioplasty/> } />
       <Route path = "/endoscopy" element={<Endoscopy/> } />
       <Route path = "/neurosurgery" element={<Neurosurgery/> } />
       <Route path = "/lamino" element={<Laminectomy/> } />
       <Route path = "/kneereplacement" element={<KneeReplacement/> } />
       <Route path = "/stroke" element={<StrokeSurgery/> } />
       <Route path = "/cataract" element={<CataractSurgery/> } />
       <Route path = "/clonoscopy" element={<Colonoscopy/> } />
       <Route path = "/mission" element={<Mission/> } />
       <Route path = "/history" element={<History/> } />
       <Route path = "/checkup" element={<Checkup/> } />
       <Route path = "/view" element={<View/> } />
       <Route path = "/buy" element={<Buy/> } />
       <Route path = "/upload" element={<Upload/> } />
       <Route path = "/cart" element={<CartPage/> } />
       <Route path='/receiptpage' element={<ReceiptPage/>} />
       </Routes>
      <Footer/>
</BrowserRouter>
</AuthProvider>

</div>

  );
}

export default App;
