import React, { useState } from 'react'
import "../styles/Header.css"
import "../styles/Home.css"
import Manage from './Manage'
let idx = -1;
const Home = () => {
   const [isLogin, setIsLogin] = useState(true);
   const [alluser, setalluser] = useState([]);
   const [newFirst, setNewFirst] = useState('');
   const [newLast, setNewLast] = useState('');
   const [newPhone, setNewPhone] = useState('');
   const [newEmail, setNewEmail] = useState('');
   const [newRole, setNewRole] = useState('');
   const [newLocation, setNewLocation] = useState('');
   const [newDepartment, setNewDepartment] = useState('');
   const [newSearch, setnewSearch] = useState('');
   const toggleLogin = () => setIsLogin((prev) => !prev);
   const [storeuser, setstoreuser] = useState([])

   // this handle the Add User 
   const handleAdduser = async (e) => {
      e.preventDefault();
      let newuser = {
         First_Name: newFirst,
         Last_Name: newLast,
         Phone: newPhone,
         Email: newEmail,
         Role: newRole,
         Location: newLocation,
         Department: newDepartment,
      };
      for (let i = 0; i < storeuser.length; i++) {
         if (storeuser[i].Email === newuser.Email && idx < 0) {
            return alert("Email Alreay Exists")
         }
      }
      if (idx >= 0) {
         let updateduser = [...storeuser];
         updateduser[idx] = newuser
         setalluser(updateduser)
         setstoreuser(updateduser);
         idx = -1;
         alert('Successfully Updated')
      }
      else {
         let updateduser = [...storeuser];
         updateduser.push(newuser);
         setalluser(updateduser);
         setstoreuser(updateduser);
      }
      setNewFirst('')
      setNewLast('')
      setNewPhone('')
      setNewEmail('')
      setNewRole('')
      setNewLocation('')
      setNewDepartment('')

   };


   // searching and Management of Users
   const changeemail = async (e) => {
      setnewSearch(e.target.value)
      const filteruser = storeuser.filter((i) => i.Email.includes(newSearch));
      if (newSearch.length<1) setalluser(storeuser)
      else setalluser(filteruser)
   }

   // this handles Edit User funcrionality
   const toggleEdit = () => {
      let user = prompt('Enter Email')
      for (let i = 0; i < alluser.length; i++) {
         if (alluser[i].Email === user) {
            setNewFirst(alluser[i].First_Name)
            setNewLast(alluser[i].Last_Name)
            setNewPhone(alluser[i].Phone)
            setNewEmail(alluser[i].Email)
            setNewRole(alluser[i].Role)
            setNewLocation(alluser[i].Location)
            setNewDepartment(alluser[i].Department)
            idx = i;
         }
      }

      if (idx < 0) alert("Enter Valid Email")
   }
   return (
      <>
         {/* Header */}
         <nav className="header">
            <h3 >Manage Users</h3>
            <div style={{ display: 'flex', width: '150px', justifyContent: 'space-between' }}>

               {
                  isLogin && (
                     <button className='primaryBtn' onClick={toggleEdit}>
                        Edit
                     </button>
                  )
               }
               <button className='primaryBtn' onClick={toggleLogin}>
                  {
                     isLogin ? 'Manage' : 'Add'
                  }
               </button>


            </div>
         </nav>
         
         {isLogin ? (
            
            <div className="user-wrapper">
                  {/* Form for adding User Details */}
               <form className="user-input" onSubmit={handleAdduser}>
                  <div className="input-item">
                     <label>FIRST NAME</label>
                     <input
                        type="text"
                        required
                        value={newFirst}
                        onChange={e => setNewFirst(e.target.value)}
                        placeholder="First Name"
                     />
                  </div>
                  <div className="input-item">
                     <label>LAST NAME</label>
                     <input
                        type="text"
                        value={newLast}
                        onChange={e => setNewLast(e.target.value)}
                        placeholder="Last Name"
                        required
                     />
                  </div>
                  <div className="input-item">
                     <label>PHONE</label>
                     <input
                        type="text"
                        value={newPhone}
                        onChange={e => setNewPhone(e.target.value)}
                        placeholder="Phone Number"
                        required
                     />
                  </div>
                  <div className="input-item">
                     <label>EMAIL ID</label>
                     <input
                        type="email"
                        value={newEmail}
                        onChange={e => setNewEmail(e.target.value)}
                        placeholder="Email Id"
                        required
                     />
                  </div>
                  <div className="input-item">
                     <label>ROLE</label>
                     <input
                        type="text"
                        value={newRole}
                        onChange={e => setNewRole(e.target.value)}
                        placeholder="Role"
                        required
                     />
                  </div>
                  <div className="input-item">
                     <label>LOCATION</label>
                     <input
                        type="text"
                        value={newLocation}
                        onChange={e => setNewLocation(e.target.value)}
                        placeholder="Location"
                        required
                     />
                  </div>
                  <div className="input-item">
                     <label>DEPARTMENT</label>
                     <input
                        type="text"
                        value={newDepartment}
                        onChange={e => setNewDepartment(e.target.value)}
                        placeholder="Department"
                        required
                     />
                  </div>
                  <div className="input-item">
                     <button
                        typeof='submit'
                        className="primaryBtn"
                     >
                        Add
                     </button>
                  </div>
               </form>
            </div>
         ) : (
            <>
            {/* Display All User and Search Functionaity */}
               <div className='searchbar'>
                  <input
                     type="text"
                     value={newSearch}
                     onChange={changeemail}
                     placeholder="Search for email"
                  />
               </div>
               <Manage data={alluser} />
            </>
         )}

      </>
   )
}


export default Home