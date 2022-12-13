import React, { useState } from "react";
import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
} from "./Questions";

const Button = ({ text, handleClick, active }) => {
  return (
    <div
      className={`default-btn ${active && "active-bg"}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

const Feedback = () => {
  const [datas, setDatas] = useState({
    howEasy: "",
    challengeSolved: "",
    needsNotMet: "",
    wouldPurchase: "yes",
    whyNotPurchase: [],
    specificFeature: "",
    dragNDrop: "Excellent",
    mobileTablet: "Excellent",
    webTemplate: "Excellent",
    bgAndImgCmp: "Excellent",
    shortcuts: "Excellent",
    snippets: "Excellent",
    widgets: "Excellent",
    isClear: 3,
    wouldRecommand: 3,
    isUseful: 3,
    shouldChange: "",
    additional: "",
  });
  const [page, setPageState] = useState(0);
  const pages = 5;

  function next() {
    setPageState((curr) => {
      if (curr >= pages - 1) {
        return curr;
      } else {
        return curr + 1;
      }
    });
  }

  function skip() {
    setPageState((curr) => {
      if (curr >= pages - 1) {
        return curr;
      }
      return curr + 1;
    });
  }

  function prev() {
    setPageState((curr) => {
      if (curr <= 0) {
        return curr;
      }
      return curr - 1;
    });
  }

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);

    if (type === "checkbox") {
      const checked = e.target.checked;
      if (checked) {
        const newValue = [...datas.whyNotPurchase, value];
        setDatas((prev) => ({ ...prev, whyNotPurchase: newValue }));
      } else {
        const newValue = datas.whyNotPurchase.filter((e) => e !== value);
        setDatas((prev) => ({ ...prev, whyNotPurchase: newValue }));
      }
    } else {
      setDatas((prev) => ({ ...prev, [name]: value }));
    }
  };

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <Question1 datas={datas} handleChange={handleChange} />;
      case 1:
        return (
          <Question2 datas={datas.whyNotPurchase} handleChange={handleChange} />
        );
      case 2:
        return <Question3 datas={datas} handleChange={handleChange} />;
      case 3:
        return <Question4 datas={datas} handleChange={handleChange} />;
      case 4:
        return <Question5 datas={datas} handleChange={handleChange} />;
      default:
        return <Question1 datas={datas} handleChange={handleChange} />;
    }
  };

  return (
    <div className="custom-container col-8 shadow">
      <div className="card p-2 rounded-1">
        <div className="card-body">{pageDisplay()}</div>
        <div className="card-footer d-flex justify-content-between">
          <div className="btn-left">
            <Button text={"BACK"} handleClick={prev} />
          </div>
          <div className="d-flex gap-2">
            <Button text={"SKIP"} handleClick={skip} />
            <Button
              text={"Next"}
              // active={}
              handleClick={next}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
