import React from "react";
import ChoiceCard from "./ChoiceCard";
import RadioChoice from "./RadioChoice";
import questions from "../constants/data";

const Step1 = ({handleChange}) => {
  return (
    <>
      <p className="fw-bold fs-5 text">{questions[0].title}</p>
      <div className="questions">
        {questions[0].queries.map((q) => (
          <div key={q}>
            <ChoiceCard handleChange={handleChange} content={q} />
          </div>
        ))}
      </div>
    </>
  );
};

const Step2 = ({handleRadioChange, selected}) => {
  return (
    <>
      <p className="fw-bold fs-5 text">{questions[1].title}</p>
      <div className="questions">
        {questions[1].queries.map((q) => (
          <div key={q}>
            <RadioChoice handleRadioChange={handleRadioChange} content={q} />
          </div>
        ))}
      </div>
    </>
  );
};

const Step3 = ({handleChange}) => {
  return (
    <>
      <p className="fw-bold fs-5 text">{questions[2].title}</p>
      <div className="questions">
        {questions[2].queries.map((q) => (
          <div key={q}>
            <ChoiceCard handleChange={handleChange} content={q} />
          </div>
        ))}
      </div>
    </>
  );
};

export { Step1, Step2, Step3 };
