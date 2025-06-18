import React, { useState } from "react";
import mailImg from "../assets/mail.png";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message){
      toast.warn("Complete the Remaing Form")
    }else{
      toast.success("Form Submitted Successfully")
    }
    
    
  };


  const handleInput = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full px-4 py-16 bg-[#1e1b24] text-white flex flex-col items-center overflow-x-hidden">


      <div className="group mb-14">
        <h2 className="text-5xl font-bold text-center cursor-pointer text-[#00bcd4]">
          Contact Me
        </h2>
        <div className="h-1 w-0 bg-[#00bcd4] mt-2 transition-all duration-300 group-hover:w-full mx-auto"></div>
      </div>


      <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full max-w-6xl px-4">
        

        <div className="flex-1 bg-[#2a2e47] p-8 rounded-lg">
          <h3 className="text-2xl text-[#ffa726] font-bold mb-2">Get In Touch</h3>
          <p className="text-gray-300 mb-8 text-base">
            Feel free to reach out if you'd like to collaborate – you're just a few clicks away!
          </p>

          <form autoComplete="off" onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="h-12 rounded-md bg-[#1e1b24] px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
              value={formData.name}
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="h-12 rounded-md bg-[#1e1b24] px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
              value={formData.email}
              onChange={handleInput}
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              className="rounded-md bg-[#1e1b24] p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
              value={formData.message}
              onChange={handleInput}
            ></textarea>
            <button
              type="submit"
              className="bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold text-lg h-12 rounded-md transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>


        <div className="flex-1 flex flex-col items-center justify-center gap-4 text-lg text-gray-300">
          <img
            src={mailImg}
            alt="Mail illustration"
            className="w-52 md:w-64 mb-6"
          />


          <div className="flex items-center gap-3">
            <FiMail className="text-[#00bcd4] text-2xl md:text-3xl" />
            <span>sahilchopra1975@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FiPhone className="text-[#00bcd4] text-2xl md:text-3xl" />
            <span>+91 7827271983</span>
          </div>


          <div className="flex gap-6 mt-6 text-3xl text-white">
            <a
              href="https://www.linkedin.com/in/sahil0408/"
              target="_blank"

            >
              <FaLinkedin className="hover:text-[#00bcd4] transition" />
            </a>
            <a
              href="https://github.com/Sahil-IND"
              target="_blank"

            >
              <FaGithub className="hover:text-[#00bcd4] transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
