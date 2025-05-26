import React, { useState } from 'react';

function Job_hirer_update() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    jobTitle: '',
    resume: null,
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    jobTitle: '',
    resume: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.fullName) {
      formErrors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'A valid email is required';
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!formData.jobTitle) {
      formErrors.jobTitle = 'Job title is required';
      isValid = false;
    }

    if (!formData.resume) {
      formErrors.resume = 'Resume is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form data:', formData);
      alert('Registration Successful');
    }
  };

  return (
    <div className="registration-form-container" style={{marginTop:"150px"}} >
      <h2>Job Board Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group" style={{marginBottom:"20px"}}>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required style={{marginLeft:"30px"}}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="input-group" style={{marginBottom:"20px"}}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required style={{marginLeft:"62px"}}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group" style={{marginBottom:"20px"}}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required style={{marginLeft:"30px"}}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="input-group" style={{marginBottom:"20px"}}> 
          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required style={{marginLeft:"40px"}}
          />
          {errors.jobTitle && <p className="error">{errors.jobTitle}</p>}
        </div>

        <div className="input-group">
          <label>Resume (PDF only):</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            accept=".pdf"
            required
          />
          {errors.resume && <p className="error">{errors.resume}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Job_hirer_update;
