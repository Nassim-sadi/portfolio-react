// components/Footer.tsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "SUCCESS" | "ERROR">(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("SUCCESS");
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch(() => {
        setStatus("ERROR");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4 !text-gray-100">
            Let’s work together
          </h2>
          <p className="text-gray-300 mb-6">
            Have a question or want to collaborate? Drop me a message and I’ll
            get back to you as soon as possible.
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>

        {/* Right side: contact form */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            disabled={loading}
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            disabled={loading}
            placeholder="your.email@example.com"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
            rows={5}
            placeholder="Your message..."
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <Button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2"
            size="lg"
          >
            {loading && <Loader2Icon className="animate-spin h-4 w-4" />}
            {loading ? "Please wait" : "Send Message"}
          </Button>

          {status === "SUCCESS" && (
            <p className="text-green-400 text-sm">Message sent successfully!</p>
          )}
          {status === "ERROR" && (
            <p className="text-red-400 text-sm">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </footer>
  );
};

export default Footer;
