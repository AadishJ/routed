import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
import StepSeven from './StepSeven';
import StepEight from './StepEight';
import StepNine from './StepNine';
import StepTen from './StepTen';
import './MultiStepForm.css'; // Import the CSS file

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Step Fields
    startupName: '',
    incorporationDate: '',
    businessEntity: '',
    industrySector: '',
    incorporationNumber: '',
    registrationDate: '',
    contactInfo: {
      address: '',
      phoneNumber: ''
    },
    // Other step fields...
  });

  const handleNext = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data
    }));
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Final submission, formData contains all the collected data
    console.log('Collected Form Data:', formData);
    alert('Form submitted successfully!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onNext={handleNext} formData={formData} />;
      case 2:
        return <StepTwo onNext={handleNext} onPrevious={handlePrevious} formData={formData} />;
      case 3:
        return <StepThree onNext={handleNext} onPrevious={handlePrevious} formData={formData} />;
      case 4:
        return <StepFour onNext={handleNext} onPrevious={handlePrevious} formData={formData} />;
      case 5:
        return <StepFive onNext={handleNext} onPrevious={handlePrevious} formData={formData} />;
      case 6:
        return <StepSix onNext={handleNext} onPrevious={handlePrevious} formData={formData} />;
      case 7:
        return <StepSeven onNext={handleNext} onPrevious={handlePrevious} formData={formData} />;
      case 8:
        return <StepEight onNext={handleNext} onPrevious={handlePrevious} formData={formData} />;
      case 9:
        return <StepNine onNext={handleNext} onPrevious={handlePrevious} formData={formData} />;
      case 10:
        return <StepTen onPrevious={handlePrevious} onSubmit={handleSubmit} formData={formData} />;
      default:
        return <StepOne onNext={handleNext} formData={formData} />;
    }
  };

  return (
    <div className="container">
      <div className="cards">
        <div className="card-body">
          <h2>Multi-Step Form</h2>
          {renderStep()}
          <div className="mt-3">
            {currentStep > 1 && (
              <button className="btn btn-secondary" onClick={handlePrevious}>
                Previous
              </button>
            )}
            {currentStep < 10 && (
              <button className="btn btn-primary" onClick={() => handleNext(formData)}>
                Next
              </button>
            )}
            {currentStep === 10 && (
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
