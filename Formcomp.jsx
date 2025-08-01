import React, { useState } from 'react';

const pdetails = "http://localhost:2000/student/stu";

const Formcomp = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  const stuDetails = { name, place, phone };

  const studentHan = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(pdetails, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Correct header capitalization
        },
        body: JSON.stringify(stuDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      const result = await response.json();
      console.log("Submitted successfully:", result);
      alert("Student submitted successfully!");

    } catch (error) {
      console.error("Error submitting student:", error);
      alert("Error submitting data. Check console.");
    }
  };

  return (
    <div className='fm'>
      <h1>Form</h1>
      <form onSubmit={studentHan}>
        <label>Name:</label>
        <input
          type="text"
          placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)}
        /><br />

        <label>Place:</label>
        <input
          type="text"
          placeholder='Enter your place'
          onChange={(e) => setPlace(e.target.value)}
        /><br />

        <label>Phone:</label>
        <input
          type="text"
          placeholder='Enter your phone number'
          onChange={(e) => setPhone(e.target.value)}
        /><br />

        <button type='submit' className='but'>Submit</button>
      </form>
    </div>
  );
};

export default Formcomp;
