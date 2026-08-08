"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const NAV_LINKS = [
  { href: "/", label: "الصفحة الرئيسية" },
  { href: "/roadmaps", label: "خطط التعلم الذاتي" },
  { href: "/digital-repository", label: "المستودع الرقمي" },
  { href: "/researcher-tools", label: "أدوات ومختبر الباحث" },
  { href: "/events-career", label: "الفعاليات والتطوير المهني" },
  { href: "/researcher-community", label: "مجتمع الباحثين" },
  { href: "/about", label: "عن المنصة" },
  { href: "/contact", label: "اتصل بنا" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.subscription.unsubscribe();
  }, [supabase]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <header className="border-b border-border bg-deep/95 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="font-display font-bold text-lg text-beacon shrink-0">
          منارة الطريق
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block w-6 h-0.5 bg-ink" />
          <span className="block w-6 h-0.5 bg-ink" />
          <span className="block w-6 h-0.5 bg-ink" />
        </button>

        <nav
          aria-label="التنقل الرئيسي"
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-1 md:gap-2 absolute md:static top-full right-0 left-0 md:top-auto bg-deep md:bg-transparent border-b md:border-0 border-border px-4 md:px-0 py-3 md:py-0`}
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-2 rounded-full text-sm font-body transition-colors ${
                  active
                    ? "bg-beacon text-deep font-semibold"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          {user ? (
            <>
              <span className="text-sm text-muted font-mono">{user.email}</span>
              <button
                type="button"
                onClick={handleSignOut}
                className="px-4 py-2 rounded-full text-sm border border-border text-ink hover:border-beacon transition-colors"
              >
                تسجيل الخروج
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-full text-sm border border-border text-ink hover:border-beacon transition-colors"
              >
                تسجيل الدخول
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-full text-sm bg-beacon text-deep font-semibold hover:bg-beacon-soft transition-colors"
              >
                إنشاء حساب
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
