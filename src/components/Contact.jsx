import React, { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${data.fullname}. My mobile number is ${data.phone} and Email is ${data.email} Her is what i want to say, you ${data.msg} `
    );
  };
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Hey, Contact Us!</h1>
      </div>
      <div className="contact_div container">
        <div className="row">
          <div className="col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  UserName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your Number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your Email.com"
                  autoComplete="off"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Enter your Argue"
                ></textarea>
              </div>

              <div className="col-12 my-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>

              <div className="col-12 my-3">
                <button className="btn btn-outline-info" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Contact;
