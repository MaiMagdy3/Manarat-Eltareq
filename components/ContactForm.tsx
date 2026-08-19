"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json?.error?.message ?? "تعذر إرسال الرسالة");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "حدث خطأ غير متوقع");
    }
  }

  if (status === "success") {
    return (
      <p className="text-beacon font-body" role="status">
        تم إرسال رسالتك بنجاح. سنعاود التواصل معك قريبًا.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm text-muted mb-1 font-body">
          الاسم
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg bg-deep border border-border px-3 py-2 text-ink font-body focus-visible:outline-2 focus-visible:outline-beacon"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-muted mb-1 font-body">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg bg-deep border border-border px-3 py-2 text-ink font-body focus-visible:outline-2 focus-visible:outline-beacon"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-muted mb-1 font-body">
          الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg bg-deep border border-border px-3 py-2 text-ink font-body focus-visible:outline-2 focus-visible:outline-beacon"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400 font-body" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-2.5 rounded-full bg-beacon text-deep font-display font-bold hover:bg-beacon-soft transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "جارٍ الإرسال..." : "إرسال"}
      </button>
    </form>
  );
}
