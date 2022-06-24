import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-blue">
      <form
        action="https://formsubmit.co/mpb0406@gmail.com"
        method="POST"
        className="flex flex-col gap-5 w-3/4 md:w-1/2 mx-auto py-10">
        <h3 className="text-5xl text-white font-bold text-center mb-5">
          Contact Me
        </h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 rounded border-[1px] border-black outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded border-[1px] border-black outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-2 rounded border-[1px] border-black outline-none"
          required
        />
        <button
          type="submit"
          className="bg-yellow-400 w-1/2 mx-auto rounded p-2 hover:bg-yellow-500 duration-300 text-neutral-50 font-bold">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
