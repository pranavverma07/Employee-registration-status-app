import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeList({ employees }) {
  return (
    <div>
      <h2>All Employees</h2>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeeList;