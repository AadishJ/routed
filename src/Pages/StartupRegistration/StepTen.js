// StepTen.js
import React, { useState } from 'react';

function StepTen({ onPrevious, formData }) {
  const [dpiitData, setDpiitData] = useState({
    dpiitRecognition: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDpiitData({
      ...dpiitData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({ ...formData, ...dpiitData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="dpiitRecognition" className="form-label">DPIIT Recognition</label>
        <input
          type="text"
          className="form-control"
          id="dpiitRecognition"
          name="dpiitRecognition"
          value={dpiitData.dpiitRecognition}
          onChange={handleChange}
          placeholder="Enter DPIIT recognition details"
        />
      </div>
      <button type="button" className="btn btn-secondary me-2" onClick={onPrevious}>Previous</button>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
}

export default StepTen;
