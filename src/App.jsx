/* eslint-disable react/prop-types */

import SuccessPage from './components/SuccessPage';
import Cart from './components/form-steps/Cart';
import ContactPage from './components/form-steps/ContactPage';
import CardDetail from './components/form-steps/CardDetail';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './App.css'

function App() {

  //const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    cardname: '',
    cardnumber: '',
    cardexpmonth: '',
    cardcvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
const data= formData
  return (
    <Router>
      <div className='container bg-black-400 flex justify-center my-28'>
        <div>
        <h1>complete your checkout</h1>
        <Link to='/cart'>click here</Link>
        </div>
      </div>
      <Routes>
        <Route path='/cart' element={<Cart  formData={formData}  handleChange={handleChange} />} />
        <Route path="/contact" element={<ContactPage formData={formData} handleChange={handleChange} />} />
        <Route path="/payment" element={<CardDetail formData={formData} handleChange={handleChange} />} />
        <Route path="/success" element={<SuccessPage data={data}/>} />
      </Routes>

    </Router>
  
  )
}

export default App





