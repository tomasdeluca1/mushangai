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
        throw new Error(payload.error || "No se pudo enviar el mensaje.");
      }

      setStatus({
        type: "success",
        message: "Consulta enviada. Te respondo pronto por email.",
      });
      setFormData(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Hubo un problema enviando el formulario.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Nombre y empresa
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-input"
          placeholder="Ej: María García, Globant"
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
          Paquete de interés
        </label>
        <select
          id="packageInterest"
          name="packageInterest"
          className="form-select"
          value={formData.packageInterest}
          onChange={handleChange}
          required
        >
          <option value="">Seleccioná un paquete</option>
          <option value="Aliado — USD 1.000">Aliado — USD 1.000</option>
          <option value="Partner — USD 3.000">Partner — USD 3.000</option>
          <option value="Sponsor Principal — USD 5.000+">
            Sponsor Principal — USD 5.000+
          </option>
          <option value="Quiero charlar primero">Quiero charlar primero</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Contame qué te interesa del proyecto..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="form-submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar consulta →"}
      </button>

      {status.message ? (
        <p className={`form-status form-status-${status.type}`}>{status.message}</p>
      ) : null}
    </form>
  );
}
