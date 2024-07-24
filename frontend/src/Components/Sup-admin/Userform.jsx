// import React, { useState } from 'react';

// // UserForm component: a form to add a new user
// // State hooks to manage form fields and image preview
// const UserForm = ({ addUser }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [image, setImage] = useState(null);
//   const [isActive, setIsActive] = useState(false);
//   const [imagePreview, setImagePreview] = useState('');

// // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addUser({ name, email, image, isActive });
//     setName('');
//     setEmail('');
//     setImage('');
//     setIsActive(false);
//   };

//  // Handle image file selection and create a preview
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(file);
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setImage(null);
//       setImagePreview('');
//     }
//   };

//   return (
//     <form className="mb-4" onSubmit={handleSubmit}>
//       <h2 className="text-xl font-bold mb-2 font-mono">Add New User</h2>
//       <div className="mb-2">

//            {/* Name input field */}
//         <label className="block font-semibold">Name</label>
//         <input className="w-1/3 p-2 border" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </div>

//       {/* Email input field */}
//       <div className="mb-2">
//         <label className="block font-semibold">Email</label>
//         <input className="w-1/3 p-2 border" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>

//        {/* Image file input and preview */}
//       <div className="mb-2">
//         <label className="block font-semibold">Image</label>
//         <input className="w/2 p-2 border" type="file" onChange={handleImageChange} required />
//         {imagePreview && <img src={imagePreview} alt="Preview" className="h-20 w-20 mt-2 rounded-full" />}
//       </div>

//       {/* Active status checkbox */}
//       <div className="mb-2">
//         <label className="block">Active</label>
//         <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
//       </div>

          
//       {/* Submit button */}
//       <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Add User</button>
//     </form>
//   );
// };

// export default UserForm;



import React, { useState } from 'react';

// UserForm component: a form to add a new user
// State hooks to manage form fields and image preview
const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [panNo, setPanNo] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email, panNo, address, image, isActive });
    setName('');
    setEmail('');
    setPanNo('');
    setAddress('');
    setImage('');
    setIsActive(false);
  };

  // Handle image file selection and create a preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImagePreview('');
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-2 font-mono">Add New User</h2>
      <div className="mb-2">
        <label className="block font-semibold">Name</label>
        <input className="w-1/3 p-2 border" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Email</label>
        <input className="w-1/3 p-2 border" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Pan Number</label>
        <input className="w-1/3 p-2 border" type="text" value={panNo} onChange={(e) => setPanNo(e.target.value)} required />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Address</label>
        <input className="w-1/3 p-2 border" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
     
      <div className="mb-2">
        <label className="block font-semibold">Image</label>
        <input className="w/2 p-2 border" type="file" onChange={handleImageChange} required />
        {imagePreview && <img src={imagePreview} alt="Preview" className="h-20 w-20 mt-2 rounded-full" />}
      </div>
      <div className="mb-2">
        <label className="block">Active</label>
        <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Add User</button>
    </form>
  );
};

export default UserForm;