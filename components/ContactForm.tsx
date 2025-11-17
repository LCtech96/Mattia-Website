"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri").max(50, "Il nome è troppo lungo"),
  surname: z.string().min(2, "Il cognome deve contenere almeno 2 caratteri").max(50, "Il cognome è troppo lungo").optional(),
  email: z.string().email("Inserisci un'email valida"),
  subject: z.string().min(3, "L'oggetto deve contenere almeno 3 caratteri").max(100, "L'oggetto è troppo lungo").optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri").max(1000, "Il messaggio è troppo lungo"),
  honeypot: z.string().max(0, "Bot detected"), // Honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Errore nell'invio del messaggio");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm uppercase tracking-wide text-charcoal-700 mb-3">
            Nome <span className="text-charcoal-500">(obbligatorio)</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-3 border-b-2 border-charcoal-300 bg-transparent focus:outline-none focus:border-charcoal-700 transition-colors text-charcoal-800"
            placeholder="Nome"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-charcoal-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="surname" className="block text-sm uppercase tracking-wide text-charcoal-700 mb-3">
            Cognome <span className="text-charcoal-500">(obbligatorio)</span>
          </label>
          <input
            id="surname"
            type="text"
            {...register("surname")}
            className="w-full px-4 py-3 border-b-2 border-charcoal-300 bg-transparent focus:outline-none focus:border-charcoal-700 transition-colors text-charcoal-800"
            placeholder="Cognome"
          />
          {errors.surname && (
            <p className="mt-2 text-sm text-charcoal-600">{errors.surname.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm uppercase tracking-wide text-charcoal-700 mb-3">
          E-mail <span className="text-charcoal-500">(obbligatorio)</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-3 border-b-2 border-charcoal-300 bg-transparent focus:outline-none focus:border-charcoal-700 transition-colors text-charcoal-800"
          placeholder="Indirizzo e-mail"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-charcoal-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm uppercase tracking-wide text-charcoal-700 mb-3">
          Oggetto <span className="text-charcoal-500">(obbligatorio)</span>
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className="w-full px-4 py-3 border-b-2 border-charcoal-300 bg-transparent focus:outline-none focus:border-charcoal-700 transition-colors text-charcoal-800"
          placeholder="Oggetto del messaggio"
        />
        {errors.subject && (
          <p className="mt-2 text-sm text-charcoal-600">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm uppercase tracking-wide text-charcoal-700 mb-3">
          Messaggio <span className="text-charcoal-500">(obbligatorio)</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={6}
          className="w-full px-4 py-3 border-b-2 border-charcoal-300 bg-transparent focus:outline-none focus:border-charcoal-700 transition-colors text-charcoal-800 resize-none"
          placeholder="Il tuo messaggio..."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-charcoal-600">{errors.message.message}</p>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="bg-sage-100 border-l-4 border-sage-600 text-sage-800 px-4 py-3">
          Messaggio inviato con successo! Ti risponderò al più presto.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border-l-4 border-red-600 text-red-800 px-4 py-3">
          Si è verificato un errore. Riprova più tardi o contattami direttamente via email.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Invio in corso..." : "Invia"}
      </button>
    </form>
  );
}

