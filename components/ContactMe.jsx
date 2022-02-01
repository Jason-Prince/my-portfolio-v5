import React from "react";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="grid w-full grid-cols-12 gap-4 pb-10 text-2xl text-cyan-800 duration-1000 font-Poppins dark:text-gray-400"
    >
      <h2 className="col-start-1 pb-3 duration-1000 border-b-2 border-cyan-800 dark:border-gray-400 col-span-full whitespace-nowrap">
        Say Hello
      </h2>
      <div className="col-start-1 text-lg col-span-full md:col-span-6">
        <p>
          Looking to start a new project or just want to say hi? Send me an
          email and I&#39;ll do my best to reply within 24 hours!
        </p>
        <br />
        <p>
          If contact forms aren&#39;t your thing... send me an email at
          jasoncprince@gmail.com
        </p>
      </div>
      <div className="col-start-1 text-lg md:col-start-7 col-span-full ">
        <form className="grid gap-2 " action="">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="p-1 pl-2 duration-1000 border-2 border-cyan-800 rounded dark:border-gray-400"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="p-1 pl-2 duration-1000 border-2 border-cyan-800 rounded dark:border-gray-400"
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@email.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              className="h-40 p-1 pl-2 duration-1000 border-2 border-cyan-800 rounded dark:border-gray-400"
              type="text"
              id="message"
              name="message"
              placeholder="Hello..."
            />
          </div>
          <input
            className="p-1 pl-2 duration-1000 border-2 border-cyan-800 rounded cursor-pointer dark:border-gray-400"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
