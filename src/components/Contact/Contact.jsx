import { React, useState, useEffect }from 'react';
import './Contact.css';
import logo from '../../assets/croppedlogo.png';
import Sending from '../../assets/send-anim.gif'

function Contact() {

  const [result, setResult] = useState("hi");
  const [popup, setPopup] = useState(false);


  const onSubmit = async (event) => {
    setPopup(true);
    setPopup(true);
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "15d4c9a1-7d94-4f4f-a2f6-79cd5e5864c0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    if(popup) {
      const timer = setTimeout(() =>
        setPopup(false), 3000);
      return () => clearTimeout(timer)};
    },
  [popup]);


  return (
    <div className="flex flex-col py-4 px-6  mx-6 h-auto bg-black bg-opacity-30 border border-black max-w-screen-md sm:w-2/5 ">
      <img src={logo} alt="logo" className="rounded-full h-20 object-contain  items-center" />
      <h2 className="mb-3 font-navfont text-3xl text-white ">CONTACT US</h2>
      <p className="mb-4  font-light text-center text-gray-300 sm:text-xl">Get in touch with us!</p>
      <form onSubmit={onSubmit}>
        <div className="flex flex-row">
          <div className="w-1/2 pr-2">
            <label for="firstName" className="text-white hidden">
              {' '}
              First Name:
            </label>
            <input
              type="text"
              name='firstname'
              className="shadow-sm text-white text-sm rounded-sm block w-full p-2.5  bg-gray-400 bg-opacity-20"
              id="fname"
              placeholder="First Name"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label for="lastName" className="text-white hidden">
              Last Name:{' '}
            </label>
            <input
              type="text"
              name='lastname'
              className="shadow-sm bg-gray-400 bg-opacity-20 text-white text-sm rounded-sm block w-full p-2.5 "
              id="lname"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="pt-4">
          <label for="email" className="text-white hidden">
            Email:{' '}
          </label>
          <input
            type="email"
            name='email'
            className="shadow-sm bg-gray-400 bg-opacity-20 text-white text-sm rounded-sm block w-full p-2.5 "
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="pt-4">
          <label for="phoneNumber" className="text-white hidden">
            Phone Number:{' '}
          </label>
          <input
            type="text"
            name='phoneNumber'
            className="shadow-sm bg-gray-400 bg-opacity-20 text-white text-sm rounded-sm block w-full p-2.5 "
            id="phonenumber"
            placeholder="Phone Number"
          />
        </div>
        <div className="py-4">
          <label for="message" className="text-white hidden">
            Message{' '}
          </label>
          <textarea
            rows="6"
            name='message'
            className="text- shadow-sm bg-gray-400 bg-opacity-20 text-white text-sm rounded-sm block w-full p-3 h-32 "
            id="message"
            placeholder="Message"
            required
          />
        </div>
      <div className="w-full">
        <button
          type="submit"
          className="items-center align-center my-2 p-2 text-sm text-white  bg-yellow-500 bg-opacity-1 rounded-3xl shadow-sm hover:bg-yellow-600 drop-shadow-sm sm:w-1/3"
        >
          Send { '>' }
        </button>
      </div>
      </form>
      {popup && (
        <div className="msgoverlaybg">
          <div className="msgoverlay">
              {/* <h3>{result}</h3> */}
              <img src={Sending} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
