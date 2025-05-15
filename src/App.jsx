import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import AdminPanel from './components/AdminPanel';
import HRPanel from './components/HRPanel';

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/hr">HR</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome to Employee Dashboard</h2>} />
        <Route path="/register" element={<EmployeeForm setEmployees={setEmployees} />} />
        <Route path="/employees" element={<EmployeeList employees={employees} />} />
        <Route path="/admin" element={<AdminPanel employees={employees} setEmployees={setEmployees} />} />
        <Route path="/hr" element={<HRPanel employees={employees} />} />
      </Routes>
    </div>
  );
}

export default App;