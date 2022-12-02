import React, { useState } from "react";
import { bgImg, Email, ChevronRight, Reset } from "../assets";
import { Modal } from "react-bootstrap";
import "./invitefriends.css";

const InviteFriends = () => {
  const [userInfo, setUserInfo] = useState({
    emails: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setUserInfo((prev) => {
      if (inputName === "friendsMails") {
        return {
          emails: newValue,
          message: prev.message,
          agree: prev.agree,
          reminder: prev.reminder,
        };
      } else if (inputName === "message") {
        return {
          emails: prev.emails,
          message: newValue,
          agree: prev.agree,
          reminder: prev.reminder,
        };
      }
    });
  }

  function resetTextarea() {
    setUserInfo((prev) => {
      return {
        emails: prev.emails,
        message: "",
      };
    });
  }

  const emailsList = userInfo.emails.split(",");
  const dataToSend = {
    message: userInfo.message,
    emails: emailsList,
  };

  function handleSubmit() {
    postData("https://www.speedwapp.com", JSON.stringify(dataToSend)).then(
      (data) => {
        console.log(data);
      }
    );
  }

  return (
    <div>
      <Modal show={true} size="xl" centered>
        <Modal.Body className="p-0">
          <div className="row p-0 m-0">
            <div className="col p-0 m-0">
              <img
                src={bgImg}
                alt=""
                className="img-fluid h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col">
              <div
                className="row d-flex flex-nowrap"
                style={{ backgroundColor: "#cbcbcb" }}
              >
                <div className="p-3 icon-container bg-white">
                  <img src={Email} alt="" className="icon" />
                </div>
              </div>

              <div className="row mx-auto mt-3 px-2 pb-5">
                <div className="d-flex justify-content-center">
                  <div
                    className="card rounded-1 p-3 text-center"
                    style={{ width: "25rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title fw-bolder fs-5">
                        Get $15 for every friend you refer
                      </h5>
                      <p className="card-text fs-6">
                        Your friends get $15 and you get $15 after their first
                        purchase of $50+
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <div className="text-start text-success fw-semibold mb-1">
                    Adress Book
                  </div>
                  <input
                    type="email"
                    name="friendsMails"
                    className="form-control form-control-lg rounded-1"
                    aria-label=".form-control-lg"
                    placeholder="Enter your friends email seperated by commas"
                    value={userInfo.emails}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2 custom-textarea">
                  <textarea
                    name="message"
                    className="form-control rounded-1"
                    value={userInfo.message}
                    onChange={handleChange}
                    rows="3"
                  />
                  <img
                    src={Reset}
                    alt=""
                    className="icon reset-icon"
                    role="button"
                    onClick={resetTextarea}
                  />
                </div>
                <div>
                  <input
                    className="form-check-input me-2 mb-2 rounded-1"
                    type="checkbox"
                    name="agree"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                    role="button"
                  >
                    I agree to opt-in to SPEEDWAPP's Referral program
                  </label>
                </div>
                <div>
                  <input
                    className="form-check-input me-2 mb-3"
                    type="checkbox"
                    name="reminder"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                    role="button"
                  >
                    Send my friends a reminder email
                  </label>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-lg btn-primary rounded-1 w-100"
                    onClick={handleSubmit}
                    // disabled
                  >
                    {isLoading ? (
                      "..loading"
                    ) : (
                      <div>
                        Share with friends
                        <img
                          src={ChevronRight}
                          alt=""
                          className="ml-2"
                          style={{ width: "10px", color: "white" }}
                        />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default InviteFriends;
