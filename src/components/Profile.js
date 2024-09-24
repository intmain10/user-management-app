import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const [email, setEmail] = useState('user@example.com');
  const [name, setName] = useState('John Doe');
  const history = useHistory();

  const handleSave = (e) => {
    e.preventDefault();
    // Save the updated user information (usually done via API call)
    console.log('User updated:', { email, name });
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    // Handle user logout logic here
    history.push('/login');
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>User Profile</h2>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Save</button>
      </form>
      <button className="btn btn-secondary mt-3" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
