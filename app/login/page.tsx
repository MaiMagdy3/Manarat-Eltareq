"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (signInError) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      return;
    }

    router.push("/");
    router.refresh();
  }

  async function handleOAuth(provider: "google" | "github") {
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  }

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <h1 className="font-display font-extrabold text-3xl text-ink mb-2">تسجيل الدخول</h1>
      <p className="text-muted font-body mb-8">مرحبًا بعودتك إلى منارة الطريق.</p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
          {loading ? "جارٍ الدخول..." : "تسجيل الدخول"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3 text-muted text-sm font-body">
        <span className="h-px flex-1 bg-border" />
        أو
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="space-y-3">
        <button
          type="button"
          onClick={() => handleOAuth("google")}
          className="w-full px-6 py-2.5 rounded-full border border-border text-ink hover:border-beacon transition-colors font-body"
        >
          الدخول عبر Google
        </button>
        <button
          type="button"
          onClick={() => handleOAuth("github")}
          className="w-full px-6 py-2.5 rounded-full border border-border text-ink hover:border-beacon transition-colors font-body"
        >
          الدخول عبر GitHub
        </button>
      </div>

      <p className="mt-8 text-sm text-muted font-body">
        ليس لديك حساب؟{" "}
        <Link href="/register" className="text-beacon hover:underline">
          أنشئ حسابًا جديدًا
        </Link>
      </p>
    </section>
  );
}
