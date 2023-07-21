/* eslint-disable react/prop-types */
import {MdPerson,MdEmail,MdHome,MdLocationCity} from 'react-icons/md'


const ContactPage = ({formData, handleChange,onSubmit}) => {
 /* const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
*/
 

  return (
    <form onSubmit={onSubmit} >
      <h1 className='mb-4 font-bold'>Billing Address</h1>
      <div className='flex mb-2'>
       <label ><MdPerson />Full Name</label>
      <input
        className='mt-4 ml-3 pl-2 w-80'
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      </div>
      <div className='flex mt-2 mb-2'>
       <label><MdEmail /> Email</label>
      <input
        className='mt-4 ml-3 pl-2 w-full'
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      </div>
      <div className='flex mt-2 mb-2'>
       <label ><MdHome /> Address</label>
      <input
        className='mt-4 ml-3 pl-2 w-full'
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        required
      />
      </div>
      <div className='flex mb-2'>
       <label ><MdLocationCity /> City</label>
        <input
          className='mt-4 ml-3 pl-2 w-full'
          type="text"
          id="city"
          name="city"
          value={formData.city}
          placeholder="New York"
          onChange={handleChange}
          />
        </div>
      <button  type="submit" className='w-full bg-gray-700 mt-3 p-3'>Next</button>
    </form>
  );
};

export default ContactPage
 