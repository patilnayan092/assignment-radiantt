import React, { useState } from 'react';
import Header from './components/Header';
import ComplainantDetails from './components/ComplainantDetails';
import ComplaintType from './components/ComplaintTypeForm';
import Footer from './components/Footer';

function App() {
  const [currentStep, setCurrentStep] = useState('Complaint Type');

  const changeStep = (step) => {
    setCurrentStep(step)
  }
  const steps = [
    "Complaint Type",
    "Complainant Details",
    "FAE Details",
    "Complaint Details",
    "Review Complaint",
    "Submitted",
  ];

  return (
    <div className="usa-app">
      <Header />
      <main>
        <div className="usa-section padding-top-5 padding-bottom-0">
          <div className="grid-container">
            <div className="usa-step-indicator margin-bottom-1" aria-label="progress">
              <ol className="usa-step-indicator__segments">
                {steps.map((step, index) => (
                  <li
                    key={step}
                    className={`usa-step-indicator--center padding-2 padding-right-3 ${index === 0 ? "radius-left-pill" : ""
                      } ${index === steps.length - 1 ? "radius-right-pill" : ""} text-white ${step === currentStep ? "bg-gold" : steps.indexOf(currentStep) > index ? "bg-green" : "bg-base"
                      }`}
                  >
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {currentStep === 'Complaint Type' && <ComplaintType changeStep={changeStep} />}
            {currentStep === 'Complainant Details' && <ComplainantDetails changeStep={changeStep} />}
            <hr />
          </div>
        </div>
      </main>
      {currentStep === 'Complaint Type' &&
        <Footer />
      }
    </div>
  );
}

export default App;