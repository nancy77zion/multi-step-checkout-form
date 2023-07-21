/* eslint-disable react/prop-types */

import { FaTrash, FaPlus, FaMinus, FaChevronDown} from 'react-icons/fa6'
import { useState } from 'react';

const Cart = () => {

const [value,setValue] = useState(0)

    const plus = () => {
      setValue(value + 1);
    };
  
    const minus = () => {
      setValue(value - 1);
    };

  return (
    <section>
      <div className='container bg-pink-200 p-5'>

            <div className="flex justify-between items-center mb-4">
              <div>
              <h3 className="mb-0 text-black font-bold">Shopping Cart</h3>
              <p className="mb-0 text-gray-500">You have 2 items in your cart</p>
              </div>
              <div className='flex'>
                <p className="mb-0 pr-1">
                  <span className="text-gray-500">Sort by: </span>
                  <a href="#!" className="text-gray-700">price
                  </a>
                </p> <FaChevronDown  className='mt-1 text-gray-700'/>
              </div>
            </div>

            <div className="bg-white rounded mb-4">
              <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  className="h-auto w-32 rounded" alt="Apple phone" />
                </div>

                <div className="px-5 text-gray-500">
                  <h5>Iphone 11 pro</h5>
                  <p>256GB</p>
                  <p><span className="text-muted">Color: </span>Grey</p>
                </div>
                <div className="text-gray-500 flex justify-center items-center px-5">
                  <button className="px-2">
                    <FaMinus />
                  </button>

                  <input name="quantity" value={value} type="number"
                    className="w-6 border border-gray-500 " onChange={(e)=> e.target.value}/>

                  <button className="" onClick={plus}>
                    <FaPlus />
                  </button>
                </div>

                <div className="px-24">
                  <h5 className="mb-0 text-gray-700 font-bold text-2xl">$499.00</h5>
                </div>
                <div className="text-red-700">
                  <span><FaTrash /></span>
                </div>
            </div>
          </div>
          </div>

           <div className="bg-white rounded mb-4">
              <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  className="h-auto w-32 rounded" alt="Apple phone" />
                </div>

                <div className="px-5 text-gray-500">
                <h5>Iphone 11 pro</h5>
                  <p>256GB</p>
                  <p><span className="text-muted">Color: </span>Black</p>
                </div>
                <div className="text-gray-500 flex justify-center items-center px-5">
                  <button className="px-2">
                    <FaMinus />
                  </button>

                  <input name="quantity" value={value} type="number"
                    className="w-6  border border-gray-500" onChange={(e)=> e.target.value}/>

                  <button className="" onClick={minus}>
                    <FaPlus />
                  </button>
                </div>

                <div className="px-24">
                  <h5 className="mb-0 text-gray-700 font-bold text-2xl">$499.00</h5>
                </div>
                <div className="text-red-700">
                  <span><FaTrash /></span>
                </div>
            </div>
          </div>
          </div>

          

          <div className="bg-gray-700  rounded mb-4 shadow-lg">
          <div className="p-4 text-center rounded text-white text-lg font-bold">
          <button >Next</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Cart