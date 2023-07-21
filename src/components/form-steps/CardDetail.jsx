/* eslint-disable react/prop-types */
import {FaCcMastercard,FaCcPaypal,FaCcAmazonPay,FaGooglePay} from 'react-icons/fa6'


const CardDetail = ({ onPrevious, onSubmit,formData,handleChange }) => {
  return (
    <div  className='flex justify-center'>
    <div className=''>
       <h1 className='font-bold'>Payment</h1>
      <div className="">
        <label>Name on Card</label>
        <input type="text"
          className='mt-4 ml-3 pl-2'
          value={formData.cardname}
          name="cardname"
          placeholder="full-names"
          onChange={handleChange}/>
        </div>
        <div className=''>
          <label >Credit card number</label>
          <input type="text"
          className='mt-4 ml-3 pl-2 '
            value={formData.cardnumber}
            name="cardnumber"
            placeholder="1111-2222-3333-4444"
            onChange={handleChange}/>
          </div>
          <div>
          <label>Expiry Month</label>
            <input type="text"
              className='mt-4 ml-3 pl-2'
              value={formData.expmonth}
              name="expmonth"
              placeholder="September"
              onChange={handleChange} />
          </div>
          <div>
          <label>Exp Year</label>
            <input type="text"
            className='mt-4 ml-3 pl-2'
              value={formData.expyear}
              name="expyear"
              placeholder="2018"
              onChange={handleChange}/>
          </div>
          <div>
          <label>CVV</label>
            <input type="text"
              className='mt-4 ml-3 pl-2'
              value={formData.cvv}
              name="cvv"
              placeholder="352"
              onChange={handleChange}/>
            </div>
          <div className='mt-3'>
          <label> Accepted Cards </label>
            <div className="flex mt-3 gap-5 text-red-800">
              <FaCcMastercard/>
              <FaCcPaypal />
              <FaGooglePay />
              <FaCcAmazonPay />
            </div>
          </div>
      <div className='flex justify-between m-8'>   
      <button className='text-gray-700 font-extrabold' onClick={onPrevious}>Previous</button>
      <button className='text-gray-700 font-extrabold' onClick={onSubmit}>Submit</button>
      </div>
    </div>
    </div>
  );
};

export default CardDetail
