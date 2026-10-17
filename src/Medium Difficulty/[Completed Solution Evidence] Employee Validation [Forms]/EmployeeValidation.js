import React, { useState } from "react";

function EmployeeValidationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    joiningDate: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "Name must be at least 4 characters long and only contain letters and spaces.",
    email: "Email must be a valid email address.",
    employeeId: "Employee ID must be exactly 6 digits.",
    joiningDate: "Joining Date cannot be in the future.",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Perform validation checks and update error state
    if (
      name === "name" &&
      value.length >= 4 &&
      /^[A-Za-z\s]{4,}$/.test(value)
    ) {
      setFormErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    } else if (name === "email" && value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFormErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    } else if (name === "employeeId" && value.length === 6) {
      setFormErrors((prevState) => ({
        ...prevState,
        employeeId: "",
      }));
    } else if (
      name === "joiningDate" &&
      value <= new Date().toISOString().split("T")[0]
    ) {
      setFormErrors((prevState) => ({
        ...prevState,
        joiningDate: "",
      }));
    } else {
      if (name === "name") {
        setFormErrors((prevState) => ({
          ...prevState,
          name: "Name must be at least 4 characters long and only contain letters and spaces.",
        }));
      } else if (name === "email") {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "Email must be a valid email address.",
        }));
      } else if (name === "employeeId") {
        setFormErrors((prevState) => ({
          ...prevState,
          employeeId: "Employee ID must be exactly 6 digits.",
        }));
      } else if (name === "joiningDate") {
        setFormErrors((prevState) => ({
          ...prevState,
          joiningDate: "Joining Date cannot be in the future.",
        }));
      } else {
        console.log(
          "ERROR - This error should not be happening, check handleInputChange for information.",
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check
    const isFormValid = Object.values(formErrors).every(
      (error) => error === "",
    );

    if (isFormValid) {
      // Form submission logic
      console.log("Form submitted successfully!");
      // Reset the form
      setFormData({
        name: "",
        email: "",
        employeeId: "",
        joiningDate: "",
      });
      setFormErrors({
        name: "",
        email: "",
        employeeId: "",
        joiningDate: "",
      });
    } else {
      console.log("ERROR");
    }
  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          onChange={handleInputChange}
          className="w-100"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          data-testid="input-name-test"
        />
        {formErrors.name && (
          <p className="error mt-2">
            Name must be at least 4 characters long and only contain letters and
            spaces
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          onChange={handleInputChange}
          className="w-100"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
        />
        {formErrors.email && (
          <p className="error mt-2">Email must be a valid email address</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          onChange={handleInputChange}
          className="w-100"
          type="number"
          name="employeeId"
          value={formData.employeeId}
          placeholder="Employee ID"
        />
        {formErrors.employeeId && (
          <p className="error mt-2">Employee ID must be exactly 6 digits</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          onChange={handleInputChange}
          className="w-100"
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          placeholder="Joining Date"
        />
        {formErrors.joiningDate && (
          <p className="error mt-2">Joining Date cannot be in the future</p>
        )}
      </div>
      <button
        onSubmit={handleSubmit}
        disabled={
          formErrors.name != "" ||
          formErrors.email != "" ||
          formErrors.employeeId != "" ||
          formErrors.joiningDate != ""
        }
        data-testid="submit-btn"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
