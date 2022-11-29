import { useState, createContext } from "react";
import Button from "./Buttons";
import Modal from "react-bootstrap/Modal";
import { Step1, Step2, Step3 } from "./Steps";
import { logo } from "../assets";

export const ChoicesContext = createContext();
const Popup = () => {
  const [step, setStepState] = useState(0);
  const steps = [Step1, Step2, Step3];
  const [choices, setChoices] = useState([]);

  function inc() {
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
    console.log(choices);
  }

  const stepDisplay = () => {
    switch (step) {
      case 0:
        return <Step1 handleChange={handleChange} />;
      case 1:
        return <Step2 handleChange={handleChange} />;
      case 2:
        return <Step3 handleChange={handleChange} />;
      default:
        return <Step1 handleChange={handleChange} />;
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-top">
        <div className="logo">
          <img src={logo} alt="logo_speedwapp" />
        </div>
      </div>
      <Modal show={true} size='lg'>
        <div className="questions-container">
          <div className="popup-middle">
            {/* <div className="heading">
              <h2 className="title">
                Before you start, tell us more about yourself!
              </h2>
            </div> */}

            <Modal.Header>
              <Modal.Title>
                Before you start, tell us more about yourself!
              </Modal.Title>
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
                <Button text={"SKIP"} />
                <Button text={"NEXT"} gray handleClick={inc} />
              </div>
            </Modal.Footer>

            {/* <div className="popup-btns">
              <div className="btn-left">
                <Button text={"BACK"} handleClick={dec} />
              </div>
              <div className="btn-right">
                <Button text={"SKIP"} />
                <Button text={"NEXT"} gray handleClick={inc} />
              </div>
            </div> */}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Popup;
