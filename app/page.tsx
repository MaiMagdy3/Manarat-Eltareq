import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero — signature element: a slow rotating beacon sweep behind the headline,
          referencing "منارة" (lighthouse/beacon) as the platform's namesake. */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 w-[140vw] aspect-square animate-sweep"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(232,169,76,0.16) 18deg, transparent 40deg, transparent 360deg)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <p className="font-mono text-xs tracking-widest text-beacon uppercase mb-4">
            منصة بحث علمي عربية
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink leading-tight">
            منارة الطريق
          </h1>
          <p className="mt-5 text-lg text-muted max-w-2xl mx-auto font-body">
            منصة البحث العلمي المتكاملة للباحثين والمجتمع الأكاديمي — من جمع المصادر إلى نشر
            النتائج ومشاركة المجتمع العلمي.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/register"
              className="px-6 py-3 rounded-full bg-beacon text-deep font-display font-bold hover:bg-beacon-soft transition-colors"
            >
              ابدأ الآن
            </Link>
            <Link
              href="/roadmaps"
              className="px-6 py-3 rounded-full border border-border text-ink hover:border-beacon transition-colors font-display font-semibold"
            >
              خطط التعلم الذاتي
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="رحلة الباحث المتكاملة"
            body="تعرف على مواردنا المجمعة من الكتابات الأكاديمية، الدورات، إعداد المشاريع البحثية، ومكتبة الأبحاث المنسقة."
          />
          <FeatureCard
            title="أقسام واضحة ومباشرة"
            body="كل قسم له رابط ثابت خاص به يمكن مشاركته أو الرجوع إليه مباشرة، بدل الاعتماد على تبديل مؤقت داخل صفحة واحدة."
          />
          <FeatureCard
            title="متجاوب لجميع الأجهزة"
            body="القائمة والتخطيط يتكيفان مع الشاشات الصغيرة والكبيرة، ليبقى الوصول جاهزًا للباحثين على الجوال والكمبيوتر."
          />
        </div>
      </section>
    </>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-panel p-6">
      <h3 className="font-display font-bold text-ink text-lg mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed font-body">{body}</p>
    </div>
  );
}
