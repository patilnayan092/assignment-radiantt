import React, { useState } from 'react';

const ComplainantDetails = ({ changeStep }) => {
  const [anonymous, setAnonymous] = useState(null);

  const [complaintForm, setComplaintForm] = useState({
    'org-name': '',
    "org-type": '',
    "org-type-other": '',
    "org-role": '',
    "org-phone": '',
    "complainant-name": '',
    "complainant-first-name": '',
    "complainant-mi": '',
    "complainant-last-name": '',
    "complainant-address1": '',
    "complainant-address2": '',
    "complainant-city": '',
    "complainant-state": '',
    "complainant-zip-code": '',
    "complainant-email": '',
    "complainant-contact-phone": '',
    "complainant-cell-number": ''
  })

  console.log(complaintForm, "complaintForm ")
  return (
    <div className="usa-section  padding-top-3 padding-bottom-0">
      <div className="use-grid">
        <h1>Complainant Details</h1>
        <hr />
        <fieldset className="usa-fieldset bg-gray-5 padding-3 radius-md">
          <div className="display-flex flex-align-center">
            <legend className="usa-legend font-bold margin-right-2">Do you want to remain anonymous during this process? *</legend>
            <div className="usa-radio margin-right-2">
              <input
                className="usa-radio__input"
                id="anonymous-yes"
                type="radio"
                name="anonymous"
                checked={anonymous === "yes"}
                onChange={() => setAnonymous("yes")}
              />
              <label className="usa-radio__label" htmlFor="anonymous-yes">Yes</label>
            </div>
            <div className="usa-radio">
              <input
                className="usa-radio__input"
                id="anonymous-no"
                type="radio"
                name="anonymous"
                checked={anonymous === "no"}
                onChange={() => setAnonymous("no")}
              />
              <label className="usa-radio__label" htmlFor="anonymous-no">No</label>
            </div>
          </div>
          <p className="usa-hint margin-top-2">
            If you select yes, CMS will not share your information with the Filed Against Entity (FAE) during the
            investigation process. However, information provided in this complaint is subject to FOIA rules and policies.
          </p>
        </fieldset>

        <div className="grid-row grid-gap">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="org-name">Complainant Organization Name *</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" name="org-name" id="org-name" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} required />
          </div>
        </div>
        <div className="grid-row grid-gap bg-base-lightest">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="org-type">Complainant Organization Type</label>
          </div>
          <div className="grid-col-6">
            <select className="usa-select radius-lg border-base-lighter" name="org-type" id="org-type" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))}>
              <option>--None--</option>
            </select>
          </div>
        </div>

        <div className="grid-row grid-gap">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="org-type-other">Complainant Organization Type (Other)</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="org-type-other" name="org-type-other" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} required />
          </div>
        </div>

        <div className="grid-row grid-gap bg-base-lightest">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="org-role">Complainant Organization Role</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="org-role" name="org-role" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} required />
          </div>
        </div>

        <div className="grid-row grid-gap">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="org-phone">Complainant Organization Phone Number *</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="org-phone" name="org-phone" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} placeholder="(xxx) xxx-xxxx" required />
          </div>
        </div>

        <div className="grid-row grid-gap bg-base-lightest">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-name">Complainant Title *</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="complainant-name" name="complainant-name" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} required />
          </div>
        </div>
        <div className="grid-row grid-gap">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-first-name">Complainant First Name *</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="complainant-first-name" name="complainant-first-name" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} required />
          </div>
        </div>

        <div className="grid-row grid-gap bg-base-lightest">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-mi">Complainant MI *</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="complainant-mi" name="complainant-mi" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} required />
          </div>
        </div>

        <div className="grid-row grid-gap">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-last-name">Complainant Last Name *</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="complainant-last-name" name="complainant-last-name" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} required />
          </div>
        </div>

        <div className="grid-row grid-gap bg-base-lightest">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-address1">Complainant Address Line 1 *</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="complainant-address1" name="complainant-address1" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} type="text" required />
          </div>
        </div>

        <div className="grid-row grid-gap">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-address2">Complainant Address Line 2</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="complainant-address2" name="complainant-address2" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} />
          </div>
        </div>

        <div className="grid-row grid-gap bg-base-lightest">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-city">Complainant City/Town *</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="complainant-city" name="complainant-city" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} required />
          </div>
        </div>

        <div className="grid-row grid-gap">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-state">Complainant State/Territory *</label>
          </div>
          <div className="grid-col-6">
            <select className="usa-select radius-lg border-base-lighter" id="complainant-state" name="complainant-state" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))}>
              <option>--None--</option>
            </select>
          </div>
        </div>

        <div className="grid-row grid-gap bg-base-lightest">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-zip-code">Complainant Zip Code *</label>
          </div>
          <div className="grid-col-6 display-flex">
            <input className="usa-input radius-lg border-base-lighter margin-right-3" id="complainant-zip-code" name="complainant-zip-code" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} placeholder='5555' required />
            <input className="usa-input radius-lg border-base-lighter" id="complainant-zip" name="complainant-zip" type="text" placeholder='Ext.' required />
          </div>
        </div>

        <div className="grid-row grid-gap">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-email">Complainant Email Address *</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="complainant-email" name="complainant-email" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} type="email" placeholder="example@demo.com" required />
          </div>
        </div>

        <div className="grid-row grid-gap bg-base-lightest">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-contact-phone">Complainant Contact Phone Number *</label>
          </div>
          <div className="grid-col-6 display-flex">
            <input className="usa-input radius-lg border-base-lighter margin-right-3" id="complainant-contact-phone" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} name="complainant-contact-phone" type="text" placeholder="(xxx) xxx-xxxx" required />
            <input className="usa-input radius-lg border-base-lighter" id="complainant-contact" name="complainant-contact" type="text" placeholder='Ext.' required />
          </div>
        </div>

        <div className="grid-row grid-gap">
          <div className="grid-col-6">
            <label className="usa-label margin-bottom-1" htmlFor="complainant-cell-number">Complainant Cell Phone Number *</label>
          </div>
          <div className="grid-col-6">
            <input className="usa-input radius-lg border-base-lighter" id="complainant-cell-number" name="complainant-cell-number" type="text" onChange={(e) => setComplaintForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))} placeholder="(xxx) xxx-xxxx" required />
          </div>
        </div>


        <div className="usa-button-group padding-5 flex-justify">
          <button className="usa-button" onClick={() => changeStep("Complaint Type")}>
            &lt; Specify Complaint Type
          </button>
          <button className="usa-button">Cancel</button>
          <button className="usa-button" onClick={() => changeStep("FAE Details")}>
            Filed Against Entity Information &gt;
          </button>
        </div>
      </div>
    </div >
  );
};

export default ComplainantDetails;