"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const displayName = String(formData.get("displayName"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);

    if (signUpError) {
      setError(
        signUpError.message.includes("already registered")
          ? "هذا البريد الإلكتروني مسجل بالفعل"
          : "تعذر إنشاء الحساب، حاول مرة أخرى"
      );
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <section className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="font-display font-extrabold text-2xl text-ink mb-3">
          تحقق من بريدك الإلكتروني
        </h1>
        <p className="text-muted font-body">
          أرسلنا رابط تأكيد إلى بريدك الإلكتروني. افتحه لتفعيل حسابك وإكمال تسجيل الدخول.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <h1 className="font-display font-extrabold text-3xl text-ink mb-2">إنشاء حساب</h1>
      <p className="text-muted font-body mb-8">انضم إلى مجتمع منارة الطريق العلمي.</p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="displayName" className="block text-sm text-muted mb-1 font-body">
            الاسم الكامل
          </label>
          <input
            id="displayName"
            name="displayName"
            type="text"
            required
            className="w-full rounded-lg bg-panel border border-border px-3 py-2 text-ink font-body focus-visible:outline-2 focus-visible:outline-beacon"
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
            className="w-full rounded-lg bg-panel border border-border px-3 py-2 text-ink font-body focus-visible:outline-2 focus-visible:outline-beacon"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm text-muted mb-1 font-body">
            كلمة المرور
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={6}
            className="w-full rounded-lg bg-panel border border-border px-3 py-2 text-ink font-body focus-visible:outline-2 focus-visible:outline-beacon"
          />
          <p className="text-xs text-muted mt-1 font-body">6 أحرف على الأقل</p>
        </div>

        {error && (
          <p className="text-sm text-red-400 font-body" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-2.5 rounded-full bg-beacon text-deep font-display font-bold hover:bg-beacon-soft transition-colors disabled:opacity-60"
        >
          {loading ? "جارٍ الإنشاء..." : "إنشاء حساب"}
        </button>
      </form>

      <p className="mt-8 text-sm text-muted font-body">
        لديك حساب بالفعل؟{" "}
        <Link href="/login" className="text-beacon hover:underline">
          سجّل الدخول
        </Link>
      </p>
    </section>
  );
}
