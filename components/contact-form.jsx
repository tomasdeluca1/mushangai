"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  packageInterest: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "The message could not be sent.");
      }

      setStatus({
        type: "success",
        message: "Inquiry sent. I'll get back to you by email soon.",
      });
      setFormData(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "There was a problem sending the form.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Name and company
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-input"
          placeholder="Ex: Maria Garcia, Globant"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="maria@empresa.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="packageInterest">
          Package of interest
        </label>
        <select
          id="packageInterest"
          name="packageInterest"
          className="form-select"
          value={formData.packageInterest}
          onChange={handleChange}
          required
        >
          <option value="">Select a package</option>
          <option value="Ally — USD 1,000">Ally — USD 1,000</option>
          <option value="Partner — USD 3.000">Partner — USD 3.000</option>
          <option value="Lead Sponsor — USD 5,000+">
            Lead Sponsor — USD 5,000+
          </option>
          <option value="I want to talk first">I want to talk first</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Tell me what interests you about the project..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="form-submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send inquiry →"}
      </button>

      {status.message ? (
        <p className={`form-status form-status-${status.type}`}>{status.message}</p>
      ) : null}
    </form>
  );
}
