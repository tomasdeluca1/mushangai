"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  packageInterest: "",
  message: "",
};

export function ContactForm({ language, copy }) {
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
        body: JSON.stringify({ ...formData, language }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || copy.errors.invalidMessage);
      }

      setStatus({
        type: "success",
        message: copy.success,
      });
      setFormData(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : copy.fallbackError,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          {copy.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-input"
          placeholder={copy.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          {copy.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder={copy.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="packageInterest">
          {copy.packageLabel}
        </label>
        <select
          id="packageInterest"
          name="packageInterest"
          className="form-select"
          value={formData.packageInterest}
          onChange={handleChange}
          required
        >
          <option value="">{copy.packagePlaceholder}</option>
          {copy.packages.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">
          {copy.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder={copy.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="form-submit" disabled={isSubmitting}>
        {isSubmitting ? copy.sending : copy.submit}
      </button>

      {status.message ? (
        <p className={`form-status form-status-${status.type}`}>{status.message}</p>
      ) : null}
    </form>
  );
}
