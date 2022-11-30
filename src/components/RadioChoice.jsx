import { useContext } from "react";
import { ChoicesContext } from "../context/FormContext";

const RadioChoice = ({ content, handleRadioChange }) => {
  const value = useContext(ChoicesContext);
  return (
    <label className="choice-card">
      <input
        type="radio"
        id={content}
        name="radio"
        checked={value.includes(content)}
        value={content}
        onChange={handleRadioChange}
      />
      <span className="ms-2">{content}</span>
    </label>
  );
};

export default RadioChoice;
