import {useState} from "react";
import Button from "./Buttons";
import { Step1, Step2, Step3 } from "./Steps";

const Popup = () => {
    const [step, setStepState] = useState(0)
    const steps = [Step1, Step2, Step3]
    const [choices, setChoices] = useState([])



    function inc () {
        setStepState((curr)=> {
            if(curr > steps.length - 1){
                return curr
            }
            return curr + 1
        })
    }
    function dec () {
        setStepState((curr)=> {
            if(curr <= 0){
                return curr
            }
            return curr - 1
        })
    }
    function handleChange(e){
      setChoices((prev)=> [...prev, e.target.value])
      console.log(choices)
    }
    function handleCheck(e){
      // if(choices.includes(e.target.value)) {
      //   console.log(choices)
      //   return true
      // }
    }

    const stepDisplay = () => {
        switch (step){
            case 0: return (< Step1 handleChange={handleChange} handleCheck={handleCheck} />)
            case 1: return (< Step2 handleChange={handleChange} handleCheck={handleCheck} />)
            case 2: return (< Step3 handleChange={handleChange} handleCheck={handleCheck} />)
            default: return (< Step1 handleChange={handleChange} handleCheck={handleCheck} />)
        }
    }

    
  return (
    <div className="popup-container">
      <div className="popup-top">
        <div className="logo">SQUARESPACE</div>
        <div className="just-browsing">I'm just browsing</div>
      </div>
      <div className="questions-container">
        <div className="popup-middle">
          <div className="heading">
            <h2 className="title">
              Before you start, tell us more about yourself!
            </h2>
          </div>

          <div>
            {stepDisplay()}
          </div>

          <div className="popup-btns">
            <div className="btn-left">
              <Button text={"BACK"} handleClick={dec}/>
            </div>
            <div className="btn-right">
              <Button text={"SKIP"} />
              <Button text={"NEXT"} gray handleClick={inc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
