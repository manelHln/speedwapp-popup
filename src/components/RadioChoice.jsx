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
      <span className="choice-text">{content}</span>
    </label>
  );
};

export default RadioChoice;
