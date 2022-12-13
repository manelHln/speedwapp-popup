import React from "react";

export const RadioType = ({ text, name, handleChange }) => {
  return (
    <div className="col-2">
      <label className="d-flex align-items-center sm-text" role="button">
        <span>{text}</span>
        <input
          type="radio"
          className="ms-1"
          value={text}
          name={name}
          role="button"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export const TextBox = ({ querry, name, handleChange, value }) => {
  return (
    <div className="col-8 mb-3">
      <p className="fw-semibold sm-text mb-1">{querry}</p>
      <div className="col-8">
        <textarea
          name={name}
          className="form-control rounded-1"
          rows="2"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export const CheckboxType = ({ text, id, handleChange, value, checked }) => {
  return (
    <div className="col-6 p-1">
      <label className="fw-light choice-card">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        checked={checked}
        value={value}
        onChange={handleChange}
      />
        <span className="fw-light ms-2">{text}</span>
      </label>
    </div>
  );
};

export const RangeType = ({ min, max, step, name, value, handleChange }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <input
        type="range"
        className="col-8 range"
        min={min}
        max={max}
        step={step}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};
