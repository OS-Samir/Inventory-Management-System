// import React, { useState } from 'react';
// import Userlist from './Userlist'; // Importing Userlist component
// import Userform from './Userform'; // Importing Userform component

// // Dashboard component: main component to manage users
// const Dashboard = () => {

//   // State hook to manage the list of users
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', email: 'john@example.com', isActive: true, image: null },
//     { id: 2, name: 'Jane Doe', email: 'jane@example.com', isActive: false, image: null },
//   ]);

//     // Function to add a new user
//   const addUser = (user) => {
//     setUsers([...users, { ...user, id: users.length + 1 }]);
//   };
  
// // Function to remove a user by id
//   const removeUser = (id) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
//       <Userform addUser={addUser} />
//       <Userlist users={users} removeUser={removeUser} />
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState } from 'react';
import UserList from '../Sup-admin/Userlist'; // Corrected import case
import UserForm from '../Sup-admin/Userform'; // Corrected import case

const Dashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', isActive: true, image: null, panNo: 'AB1234567C', address: '123 Main St' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', isActive: false, image: null, panNo: 'XY9876543Z', address: '456 Elm St' },
  ]);
  const [showForm, setShowForm] = useState(false);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const toggleUserStatus = (id) => { 
    setUsers(users.map(user => (user.id === id ? { ...user, isActive: !user.isActive } : user)));
  };

  const handleToggleForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleToggleForm}
        >
          {showForm ? 'Close Form' : 'Add New User'}
        </button>
      </div>
      {showForm && <UserForm addUser={addUser} />}
      <UserList users={users} removeUser={removeUser} updateUser={updateUser} toggleUserStatus={toggleUserStatus} />
    </div>
  );
};

export default Dashboard;
