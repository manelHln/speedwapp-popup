const CheckboxField = ({ text, id, handleChange, value, checked }) => {
    return (
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
    );
  };

export default CheckboxField