import { useState } from "react";
import { Step1, Step2, Step3 } from "./Steps";



const Button = ({text, handleClick, active}) => {
  return (
    <div className={`default-btn ${active&& 'active-bg'}`} onClick={handleClick}>{text}</div>
  ) 
}

const Popup = () => {
  const steps = [Step1, Step2, Step3];
  const [step, setStepState] = useState(0);
  const [choices, setChoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


// Spinner effect for the button when sending data
  function Loading() {
    return (
      <div>
        <span
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        loading...
      </div>
    );
  }


  function next() {
    setStepState((curr) => {
      if (choices.length > 0) {
        if (curr >= steps.length - 1) {
          postData("https://www.speedwapp.com", JSON.stringify(choices)).then(
            (data) => {
              console.log(data);
            }
          );
          return curr;
        }
        return curr + 1;
      } else {
        return curr;
      }
    });
  }


  async function postData(url = "", data = {}) {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }


  function skip() {
    setStepState((curr) => {
      if (curr >= steps.length - 1) {
        return curr;
      }
      return curr + 1;
    });
  }



  function prev() {
    setStepState((curr) => {
      if (curr <= 0) {
        return curr;
      }
      return curr - 1;
    });
  }


  function handleCheckboxChange(e) {
    if (!choices.includes(e.target.value)) {
      setChoices((prev) => [...prev, e.target.value]);
    }
    const index = choices.indexOf(e.target.value);
    if (index > -1) {
      let newChoices = [...choices];
      newChoices.splice(index, 1);
      setChoices(newChoices);
    }
  }


  function handleRadioChange(event) {
    const newChoices = [...choices];
    choices.map((e) => {
      if (["Every month", "Every week", "Everyday"].includes(e)) {
        const index = choices.indexOf(e);
        newChoices.splice(index, 1);
        setChoices(newChoices);
      }
      return choices;
    });
    setChoices((prev) => [...prev, event.target.value]);
  }


  const stepDisplay = () => {
    switch (step) {
      case 0:
        return <Step1 choices={choices} handleCheckboxChange={handleCheckboxChange} />;
      case 1:
        return <Step2 choices={choices} handleRadioChange={handleRadioChange} />;
      case 2:
        return <Step3 choices={choices} handleCheckboxChange={handleCheckboxChange} />;
      default:
        return <Step1 choices={choices} handleCheckboxChange={handleCheckboxChange} />;
    }
  };



  return (
    <div className="d-flex justify-content-center">
      <div className="card col-8">
        <div className="card-header flex-column-reverse align-items-start">
          <div className="card-title fw-light fs-5 text mt-2">
            Before you start, tell us more about yourself!
          </div>
          <div className={`dots-container`}>
            {steps.map((e, i) => (
              <div
                className={`dot ${step === i ? "dot-active" : null}`}
                key={e}
              />
            ))}
          </div>
        </div>

        <div className="card-body">
            {stepDisplay()}
        </div>

        <div className="card-footer d-flex justify-content-between">
          <div className="btn-left">
            <Button text={"BACK"} handleClick={prev} />
          </div>
          <div className="d-flex gap-2">
            <Button text={"SKIP"} handleClick={skip} />
            <Button
              text={isLoading ? <Loading /> : "Next"}
              active={choices.length > 0}
              handleClick={next}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
