import React from 'react';

function AdminPanel({ employees, setEmployees }) {
  const approveEmployee = (id) => {
    const updated = employees.map(emp =>
      emp.id === id ? { ...emp, status: 'Accepted' } : emp
    );
    setEmployees(updated);
  };

  return (
    <div>
      <h2>Admin Panel - Approve Employees</h2>
      {employees.filter(emp => emp.status === 'Pending').map(emp => (
        <div key={emp.id} className="admin-employee-item">
          <p>{emp.fullName}</p>
          <button onClick={() => approveEmployee(emp.id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;