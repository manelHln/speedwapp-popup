const OptionField = ({value, handleChange, label, options}) => {
    return (
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              {label}
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="widgets"
              value={value}
              onChange={handleChange}
            >
                {options.map(option => <option value={option}>{option}</option>)}
            </select>
          </div>
    )
}

export default OptionField