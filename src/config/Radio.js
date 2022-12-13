const RadioType = ({ text, name, handleChange }) => {
  return (
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
  );
};

export default RadioType;
