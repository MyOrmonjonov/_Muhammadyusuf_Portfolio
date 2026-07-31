"use client";

import { FormEvent, useState } from "react";

import { apiFetch, ApiClientError } from "@/lib/api-client";

type Status = "idle" | "submitting" | "success" | "error";

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      await apiFetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof ApiClientError
          ? error.message
          : "Xatolik yuz berdi. Birozdan so'ng qayta urinib ko'ring.",
      );
    }
  };

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-2xl border border-surface-border bg-surface p-6 text-foreground"
      >
        Rahmat! Xabaringiz yuborildi — tez orada javob beraman.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm text-muted-foreground"
        >
          Ismingiz
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-foreground outline-none transition-colors duration-[var(--duration-fast)] ease-entrance focus:border-accent"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm text-muted-foreground"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-foreground outline-none transition-colors duration-[var(--duration-fast)] ease-entrance focus:border-accent"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm text-muted-foreground"
        >
          Xabar
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          className="w-full resize-none rounded-xl border border-surface-border bg-surface px-4 py-3 text-foreground outline-none transition-colors duration-[var(--duration-fast)] ease-entrance focus:border-accent"
        />
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm text-error">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:bg-accent-hover disabled:opacity-60"
      >
        {status === "submitting" ? "Yuborilmoqda…" : "Xabar yuborish"}
      </button>
    </form>
  );
};
