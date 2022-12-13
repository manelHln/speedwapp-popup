const TextBox = ({ querry, name, handleChange, value }) => {
  return (
    <div>
      <p className="fw-semibold sm-text mb-1">{querry}</p>
      <textarea
        name={name}
        className="form-control rounded-1"
        rows="2"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextBox;
