import React, { useState } from 'react';

const ComplaintType = ({ changeStep }) => {
  const [selectedType, setSelectedType] = useState("Transactions");
  return (
    <div className="usa-section padding-top-3 padding-bottom-0">
      <div className="usa-grid">
        <h1>Complaint Type</h1>
        <p className="usa-intro">Make a selection below</p>

        <fieldset className="usa-fieldset">
          {[
            {
              id: "transactions",
              label: "Transactions",
              description:
                "Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizaions, coordination of benefits and premium payment.",
            },
            {
              id: "code-sets",
              label: "Code Sets",
              description:
                "Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs.",
            },
            {
              id: "unique-identifiers",
              label: "Unique Identifiers",
              description:
                "Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).",
            },
            {
              id: "operating-rules",
              label: "Operating Rules",
              description:
                "Select if a covered entity is suspended of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.",
            },
          ].map((option) => (
            <div className="usa-radio" key={option.id}>
              <input
                className="usa-radio__input"
                id={option.id}
                type="radio"
                name="complaintType"
                value={option.label}
                checked={selectedType === option.label}
                onChange={() => setSelectedType(option.label)}
              />
              <label className="usa-radio__label" htmlFor={option.id}>
                {option.label}
              </label>
              <p className="usa-hint margin-left-4">{option.description}</p>
            </div>
          ))}
        </fieldset>

        <div className="usa-button-group padding-5 flex-justify">
          <button className="usa-button">&lt; Welcome</button>
          <button className="usa-button">Cancel</button>
          <button className="usa-button" onClick={() => changeStep('Complainant Details')}>Complainant Information &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintType;