import React, { useState } from 'react';

function EmployeeForm({ setEmployees }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    dob: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      ...form,
      id: Date.now(),
      status: 'Pending',
    };
    setEmployees(prev => [...prev, newEmployee]);
    alert("Employee registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Employee</h2>
      <input name="fullName" placeholder="Full Name" required onChange={handleChange} /><br/>
      <input name="email" placeholder="Email" type="email" required onChange={handleChange} /><br/>
      <input name="mobile" placeholder="Mobile Number" required onChange={handleChange} /><br/>
      <input name="dob" placeholder="DOB" type="date" required onChange={handleChange} /><br/>
      <textarea name="address" placeholder="Address" required onChange={handleChange} /><br/>
      <button type="submit">Register</button>
    </form>
  );
}

export default EmployeeForm;