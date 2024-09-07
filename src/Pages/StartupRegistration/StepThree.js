// StepThree.js
import React, { useState } from 'react';

function StepThree({ onPrevious, onSubmit, formData }) {
  const [representativeData, setRepresentativeData] = useState({
    nameOfAuthorizedRepresentative: '',
    designationOfAuthorizedRepresentative: '',
    mobileNoOfAuthorizedRepresentative: '',
    emailIdOfAuthorizedRepresentative: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRepresentativeData({
      ...representativeData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...formData, ...representativeData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nameOfAuthorizedRepresentative" className="form-label">Name of Authorized Representative</label>
        <input
          type="text"
          className="form-control"
          id="nameOfAuthorizedRepresentative"
          name="nameOfAuthorizedRepresentative"
          value={representativeData.nameOfAuthorizedRepresentative}
          onChange={handleChange}
          placeholder="Enter name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="designationOfAuthorizedRepresentative" className="form-label">Designation of Authorized Representative</label>
        <input
          type="text"
          className="form-control"
          id="designationOfAuthorizedRepresentative"
          name="designationOfAuthorizedRepresentative"
          value={representativeData.designationOfAuthorizedRepresentative}
          onChange={handleChange}
          placeholder="Enter designation"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mobileNoOfAuthorizedRepresentative" className="form-label">Mobile No. of Authorized Representative</label>
        <input
          type="tel"
          className="form-control"
          id="mobileNoOfAuthorizedRepresentative"
          name="mobileNoOfAuthorizedRepresentative"
          value={representativeData.mobileNoOfAuthorizedRepresentative}
          onChange={handleChange}
          placeholder="Enter mobile number"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailIdOfAuthorizedRepresentative" className="form-label">Email ID of Authorized Representative</label>
        <input
          type="email"
          className="form-control"
          id="emailIdOfAuthorizedRepresentative"
          name="emailIdOfAuthorizedRepresentative"
          value={representativeData.emailIdOfAuthorizedRepresentative}
          onChange={handleChange}
          placeholder="Enter email ID"
          required
        />
      </div>
      <button type="button" className="btn btn-secondary me-2" onClick={onPrevious}>Previous</button>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default StepThree;
