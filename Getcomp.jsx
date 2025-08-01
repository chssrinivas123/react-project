import React, { useState, useEffect } from 'react';

const userDetails = "http://localhost:2000/student/get";

const Getcomp = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(userDetails);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>All user details</h3>
      {users.map((item, index) => (
        <div className='userInfo' key={index}>
          <p>{`Name: ${item.name}`}</p>
          <p>{`Place: ${item.place}`}</p>
          <p>{`Phone: ${item.phone}`}</p>
          <br/>
        </div>
      ))}
    </div>
  );
};

export default Getcomp;
