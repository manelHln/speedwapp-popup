const RangeField = ({ min, max, step, name, value, handleChange }) => {
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

  export default RangeField