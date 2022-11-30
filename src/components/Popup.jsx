import { useState } from "react";
import Button from "./Buttons";
import { Modal } from "react-bootstrap";
import { Step1, Step2, Step3 } from "./Steps";
import { logo } from "../assets";
import  {ChoicesContext}  from "../context/FormContext";



const Popup = () => {
  const [step, setStepState] = useState(0);
  const steps = [Step1, Step2, Step3];
  const [choices, setChoices] = useState([]);

  function inc() {
    setStepState((curr) => {
      if (choices.length > 0) {
        if (curr >= steps.length - 1) {
          postData('https://www.speedwapp.com', JSON.stringify(choices))
          return curr ;
        }
        console.log(typeof(choices))
        return curr + 1;
      } else {
        return curr;
      }
    });
  }

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
        
      },
      redirect: 'follow', // 
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  function skip() {
    setStepState((curr) => {
      if (curr >= steps.length - 1) {
        return curr;
      }
      return curr + 1;
    });
  }

  function dec() {
    setStepState((curr) => {
      if (curr <= 0) {
        return curr;
      }
      return curr - 1;
    });
  }
  function handleChange(e) {
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
    debugger;
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
        return <Step1 handleChange={handleChange} />;
      case 1:
        return <Step2 handleRadioChange={handleRadioChange} />;
      case 2:
        return <Step3 handleChange={handleChange} />;
      default:
        return <Step1 handleChange={handleChange} />;
    }
  };

  return (
    <div>
      <div className="popup-top">
        <div className="logo">
          <img src={logo} alt="logo_speedwapp" />
        </div>
      </div>
      <Modal show={true} size="lg" centered>
        <Modal.Header className="flex-column-reverse align-items-start">
          <Modal.Title className="fw-light fs-5 text mt-2">
            Before you start, tell us more about yourself!
          </Modal.Title>
          <div className={`dots-container`}>
            {steps.map((e, i) => (
              <div
                className={`dot ${step === i ? "dot-active" : null}`}
                key={e}
              />
            ))}
          </div>
        </Modal.Header>

        <Modal.Body>
          <ChoicesContext.Provider value={choices}>
            {stepDisplay()}
          </ChoicesContext.Provider>
        </Modal.Body>

        <Modal.Footer>
          <div className="btn-left">
            <Button text={"BACK"} handleClick={dec} />
          </div>
          <div className="btn-right">
            <Button text={"SKIP"} handleClick={skip} />
            <Button text={"NEXT"} gray handleClick={inc} />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;
