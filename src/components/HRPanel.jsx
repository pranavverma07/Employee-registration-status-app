import React from 'react';
import EmployeeCard from './EmployeeCard';

function HRPanel({ employees }) {
  return (
    <div>
      <h2>HR Panel - Accepted Employees</h2>
      <div className="hr-panel">
        {employees.filter(emp => emp.status === 'Accepted').map(emp => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  );
}

export default HRPanel;