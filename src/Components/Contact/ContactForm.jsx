import React, { useState } from "react";
import emailJs from "emailjs-com";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailJs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // From EmailJS dashboard
        import.meta.env.VITE_EMAILJS_TEMPLET_ID, // From EmailJS dashboard
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID // From EmailJS dashboard
      )
      .then(
        (response) => {
          if (response.status === 200) {
            Swal.fire({
              title: "Your Message Send successfully!",
              icon: "success",
              timer:2000
            });
          }
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-lg mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Message Field */}
        <div className="form-control flex flex-col">
          <label className="label font-semibold">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="textarea textarea-bordered h-32 w-full"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner"></span>
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
