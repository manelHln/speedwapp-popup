import React, { useState } from "react";
import { bgImg } from "../assets";
import "./invitefriends.css";

const InviteFriends = () => {
  const [userInfo, setUserInfo] = useState({
    friendsMails: "",
    message: "",
    agree: false,
    reminder: false
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

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === 'checkbox' ? e.target.checked : e.target.value

      setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  function resetTextarea() {
    setUserInfo((prev) => ({ ...prev, message: '' }));
  }

  const emailsList = userInfo.friendsMails.split(",");
  const dataToSend = {
    message: userInfo.message,
    friendsMails: emailsList,
  };

  function handleSubmit() {
    // postData("https://www.speedwapp.com", JSON.stringify(dataToSend)).then(
    //   (data) => {
    //     console.log(data);
    //   }
    // );
    console.log(dataToSend)
  }

  return (
    <div className='container col-8'>
      <div className='card rounded-0'>
        <div className="card-content p-0">
          <div className="row p-0 m-0">
            <div className="col-6 p-0 m-0">
              <img
                src={bgImg}
                alt=""
                className="img-fluid h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-6">
              <div
                className="row d-flex flex-nowrap"
                style={{ backgroundColor: "#cbcbcb" }}
              >
                <div className="p-0">
                  <div className='p-4 bg-white col-3 d-flex justify-content-center'>
                    <i className="fa-sharp fa-solid fa-envelope fa-2xl"></i>
                  </div>
                </div>
              </div>

              <div className="row mx-auto mt-3 px-2 pb-5">
                <div className="d-flex justify-content-center">
                  <div
                    className="card rounded-1 text-center"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title fw-bold checkbox-label">
                        Get $15 for every friend you refer
                      </h5>
                      <p className="card-text checkbox-label">
                        Your friends get $15 and you get $15 after their first
                        purchase of $50+
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <div className="text-start text-success mb-1 checkbox-label">
                    Adress Book
                  </div>
                  <input
                    type="email"
                    name="friendsMails"
                    className="form-control  rounded-1 checkbox-label"
                    aria-label=".form-control-lg"
                    placeholder="Enter your friends email seperated by commas"
                    value={userInfo.friendsMails}
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
                  <i className="fa-solid fa-rotate text-success reset-icon" role="button" onClick={resetTextarea}></i>
                </div>
                <div>
                  <input
                    className="form-check-input me-2 mb-2 rounded-1"
                    type="checkbox"
                    name="agree"
                    id="flexCheckDefault"
                    checked={userInfo.agree}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label checkbox-label"
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
                    checked={userInfo.reminder}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label checkbox-label"
                    htmlFor="flexCheckChecked"
                    role="button"
                  >
                    Send my friends a reminder email
                  </label>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary rounded-1 w-100"
                    onClick={handleSubmit}
                    disabled={!userInfo.agree || !userInfo.reminder}
                  >
                    {isLoading ? (
                      "..loading"
                    ) : (
                      <div className='d-flex justify-content-center align-items-baseline'>
                        <span className='fs-6'>Share with friends</span>
                        <i className="fa-sharp fa-solid fa-chevron-right fa-xs ms-1"></i>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteFriends;
