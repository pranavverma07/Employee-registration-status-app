import React from 'react';

function EmployeeCard({ employee }) {
  const statusClass = employee.status === 'Accepted' ? 'status-accepted' : 'status-pending';

  return (
    <div className={`employee-card ${statusClass}`}>
      <h4>{employee.fullName}</h4>
      <p>Email: {employee.email}</p>
      <p>Mobile: {employee.mobile}</p>
      <p>Status: {employee.status}</p>
    </div>
  );
}

export default EmployeeCard;