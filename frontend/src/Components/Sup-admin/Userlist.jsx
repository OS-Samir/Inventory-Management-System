

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const UserList = ({ users, removeUser, updateUser, toggleUserStatus }) => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  // Function to handle when Edit button is clicked
  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setEditedUser({ ...user }); // Copy user data to editedUser state
  };

  // Function to handle saving the edited user data
  const handleSaveClick = () => {
    updateUser(editedUser); // Update user data using updateUser function
    setEditingUserId(null); // Exit editing mode
  };

  // Function to handle input changes during editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value }); // Update editedUser state with new values
  };

  const handlePrint = () => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(18);
    doc.text('User List', 105, 15, { align: 'center' });

    // Table
    let tableData = [];
    users.forEach(user => {
      tableData.push([
        user.image ? `<img src="${URL.createObjectURL(user.image)}" style="max-width: 50px; max-height: 50px; border-radius: 50%;">` : 'No Image',
        user.name,
        user.email,
        user.panNo,
        user.address,
        user.isActive ? 'Active' : 'Inactive'
      ]);
    });

    // AutoTable configuration
    doc.autoTable({
      head: [['Image', 'Name', 'Email', 'Pan Number', 'Address', 'Status']],
      body: tableData,
      startY: 25,
      didDrawPage: function (data) {
        // Footer
        const pageCount = doc.internal.getNumberOfPages();
        doc.text(`Page ${doc.internal.getNumberOfPages()}`, 10, doc.internal.pageSize.height - 10);
      }
    });

    // Save the PDF
    doc.save('userlist.pdf');
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">User List</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePrint}
        >
          Download User List
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-3">Image</th>
            <th className="py-3">Name</th>
            <th className="py-3">Email</th>
            <th className="py-3">Pan Number</th>
            <th className="py-3">Address</th>
            <th className="py-3">Status</th>
            <th className="py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="text-center">
              <td className="py-2">
                {user.image ? (
                  <img src={URL.createObjectURL(user.image)} alt={user.name} className="h-20 w-20 rounded-full mx-auto" />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td className="py-2">
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td className="py-2">
                {editingUserId === user.id ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="py-2">
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    name="panNo"
                    value={editedUser.panNo}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  user.panNo
                )}
              </td>
              <td className="py-2">
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    name="address"
                    value={editedUser.address}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  user.address
                )}
              </td>
              <td className="py-2">
                <button
                  className={`px-2 py-1 rounded ${user.isActive ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}
                  onClick={() => toggleUserStatus(user.id)}
                >
                  {user.isActive ? 'Active' : 'Inactive'}
                </button>
              </td>
              <td className="py-2">
                {editingUserId === user.id ? (
                  <>
                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2" onClick={handleSaveClick}>Save</button>
                    <button className="bg-gray-500 text-white px-4 py-1 rounded" onClick={() => setEditingUserId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="bg-yellow-500 text-white px-4 py-1 rounded mr-2" onClick={() => handleEditClick(user)}>Edit</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={() => removeUser(user.id)}>Remove</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;


