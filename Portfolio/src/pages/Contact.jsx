import React from "react";
import emailjs from 'emailjs/browser'
const Contact = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const formRef =  React.useRef()
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e)=>{
    e.preventDefault()
    setIsLoading(true)
  }
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14"
        onSubmit={}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="text"
              name="email"
              className="input"
              placeholder="John@yournmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Message
            <textarea
              rows={4}
              type="text"
              name="message"
              className="textarea"
              placeholder="Let me Know how I can help you?"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending.." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
