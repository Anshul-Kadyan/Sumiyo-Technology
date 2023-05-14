import React, { useState } from "react";
import ContactPhoto from "../assets/AppFiles/Contact Us.json";
import axios from "axios";
import Lottie from "lottie-react";

export default function Contact() {
  const [contact, setContact] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setContact({
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!contact.email || !contact.subject || !contact.message) {
      alert("Please fill in all the required fields.");
      return;
    }

    axios
      .post("https://backend.sumiyo.in/", {
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
      })
      .then((response) => {
        console.log(response.data);
        alert("Mail has been sent Successfully.");
      })
      .catch((error) => {
        alert("Error !" + error);
      });

    handleSubmit(e);
  };
  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center md:px-14 px-3 py-2 bg-ccblue">
        <div className="md:text-base text-sm font-light font-roboto">
          Having Trouble in Somthing ?
        </div>
        <div className="font-bold font-patrick md:text-6xl text-2xl md:pb-4 pb-2">
          Contact Sumiyo Technology
        </div>
        <div className="md:text-base text-sm font-light font-roboto max-w-2xl text-center">
          Stuck Somewhere ? Feel free to contact Sumiyo Techology... We will be
          glad to resolve your Query and we will reach out to you within 2 - 3
          working days.
        </div>
      </div>
      <div className="md:px-48 px-4  md:py-16 py-7 h-full w-full font-roboto">
        <div className="flex md:flex-row flex-col md:justify-between gap-4">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 md:mx-0 mx-auto  rounded-lg  sm:p-6 md:p-8 shadow">
            <form className="space-y-6">
              <h5 className="text-xl  font-medium text-gray-900">
                Let's Talk !
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-medium text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={(e) =>
                    setContact({ ...contact, email: e.target.value })
                  }
                  className="bg-cccblue border border-gray-300 text-sgrey text-sm rounded-lg block w-full p-2.5   focus:border-slate-500 focus:outline-none"
                  placeholder="name@company.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-md font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={contact.subject}
                  onChange={(e) =>
                    setContact({ ...contact, subject: e.target.value })
                  }
                  className="bg-cccblue border border-gray-300  text-sm rounded-lg focus:border-slate-500 focus:outline-none block w-full p-2.5"
                  placeholder="Let me know, how I can help You."
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-md font-medium text-gray-900 "
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={contact.message}
                  onChange={(e) =>
                    setContact({ ...contact, message: e.target.value })
                  }
                  className="block p-2.5 w-full text-sm text-sgrey bg-cccblue rounded-lg border border-gray-300 focus:border-slate-500 focus:outline-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                onClick={handleFormSubmit}
                className="text-white bg-cblue w-full  font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2"
              >
                Send message
              </button>
            </form>
          </div>
          {/* Right / Button Side */}
          <div className=" flex flex-col gap-1 items-center  ">
            <h1 className=" md:text-4xl  text-xl  ">Contact Us !</h1>
            <p className=" md:max-w-[550px] max-w-[300px] md:py-8 py-4 md:text-left text-center mx-auto">
              Stuck Somewhere ? Feel free to contact Sumiyo Techology... We will
              be glad to resolve your Query and we will reach out to you within
              2 - 3 working days. So don't hesitate to reach out! Whether you
              have a Question or Just want to chat, Use the form to send me a
              message. We'll get back to you as soon as possible.
            </p>

            <div className=" md:w-[500px] w-[300px] h-auto ">
              <Lottie animationData={ContactPhoto} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
