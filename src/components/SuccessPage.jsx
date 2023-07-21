/* eslint-disable react/prop-types */

const SuccessPage = ({ data }) => {
  return (
    <div>
      <h2 className='font-extrabold'>Order Successful!</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Address: {data.address}</p>
    </div>
  );
};

export default SuccessPage;
