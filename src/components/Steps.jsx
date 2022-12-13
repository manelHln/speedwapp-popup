const questions = [
  {
    title: "What will you be using Speedwapp for?",
    queries: [
      "Landing page",
      "Portfolio",
      "Prebuilt sections that can be reused in other projects",
      "Make a website responsive",
      "Add animation to my website",
    ],
  },
  {
    title:
      "How often do you convert a website design into a fully functional web page?",
    queries: ["Every month", "Every week", "Everyday"],
  },
  {
    title: "What kind of features do you use on your website?",
    queries: ["Flexbox", "Media-queries", "Forms", "Animations", "Others"],
  },
];


export const ChoiceCard = ({content, handleCheckboxChange, choices}) => {

  return (
    <label className='choice-card'>
        <input type="checkbox" id={content} checked={choices.includes(content)} value={content} onChange={handleCheckboxChange} />
        <span className='fw-light ms-2'>{content}</span>
    </label>
  )
}

const RadioChoice = ({ content, handleRadioChange, choices }) => {
  return (
    <label className="choice-card">
      <input
        type="radio"
        id={content}
        name="radio"
        checked={choices.includes(content)}
        value={content}
        onChange={handleRadioChange}
      />
      <span className="ms-2">{content}</span>
    </label>
  );
};

const Step1 = ({choices, handleCheckboxChange }) => {
  return (
    <>
      <p className="fw-bold fs-5 text">{questions[0].title}</p>
      <div className="row">
        {questions[0].queries.map((q) => (
          <div className="col-6 p-2" key={q}>
            <ChoiceCard choices={choices} handleCheckboxChange={handleCheckboxChange} content={q} />
          </div>
        ))}
      </div>
    </>
  );
};

const Step2 = ({ choices, handleRadioChange }) => {
  return (
    <>
      <p className="fw-bold fs-5 text">{questions[1].title}</p>
      <div className="row">
        {questions[1].queries.map((q) => (
          <div className="col-6 p-2" key={q}>
            <RadioChoice choices={choices} handleRadioChange={handleRadioChange} content={q} />
          </div>
        ))}
      </div>
    </>
  );
};

const Step3 = ({ choices, handleCheckboxChange }) => {
  return (
    <>
      <p className="fw-bold fs-5 text">{questions[2].title}</p>
      <div className="row">
        {questions[2].queries.map((q) => (
          <div className="col-6 p-2" key={q}>
            <ChoiceCard choices={choices} handleCheckboxChange={handleCheckboxChange} content={q} />
          </div>
        ))}
      </div>
    </>
  );
};

export { Step1, Step2, Step3 };
