import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "SUCCESS" | "ERROR">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // replace with your EmailJS template ID
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        // replace with your EmailJS public key (user ID)
      )
      .then(() => {
        setStatus("SUCCESS");
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch(() => {
        setStatus("ERROR");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="from_name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="from_email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition"
          >
            Send Message
          </button>

          {status === "SUCCESS" && (
            <p className="text-green-600 mt-3 text-center">
              Message sent successfully!
            </p>
          )}
          {status === "ERROR" && (
            <p className="text-red-600 mt-3 text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
