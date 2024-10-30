import React, { useState } from "react";

export default function FormInput(props) {
  const { name, type, placeholder, label, value, onChange } = props;

  return (
    <>
      <div className="auth-field">
        <div className="input-group">
          <label
            className={
              label === "* Full Name"
                ? "label-input"
                : label === "* Email"
                ? "label-input"
                : label === "* Password"
                ? "label-input"
                : label === "Email"
                ? "label-input"
                : label === "Password"
                ? "label-input"
                : "label-input-red"
            }
          >
            {label}
          </label>
          <input
            className="input-form"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>
    </>
  );
}
