import type { Metadata } from "next";
import { PageHeader, Box } from "@/components/PageSection";
import RoadmapLevels from "@/components/RoadmapLevels";
import {
  recommendedBooks,
  mainTopicsInOrder,
  suggestedSources,
  fiveMonthPlan,
  attribution,
} from "@/lib/data/research-roadmap";

export const metadata: Metadata = { title: "خطط التعلم الذاتي للبحث العلمي — منارة الطريق" };

export default function ResearchRoadmapsPage() {
  return (
    <>
      <PageHeader
        title="خطط التعلم الذاتي للبحث العلمي"
        body="خطة تعلم ذاتي مُنظّمة على ثلاثة مستويات — من أول خطوة في البحث العلمي إلى تصميم الدراسات والتجارب السريرية. إعداد وتنظيم د. محمود بسيوني، ويُحدَّث باستمرار."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        <RoadmapLevels />

        <div className="grid md:grid-cols-2 gap-6">
          <Box>
            <h2 className="font-display font-bold text-xl text-ink mb-4">
              الموضوعات الأساسية بالترتيب
            </h2>
            <ol className="space-y-4">
              {mainTopicsInOrder.map((topic, i) => (
                <li key={topic.title} className="flex gap-3">
                  <span className="font-mono text-beacon text-sm shrink-0">{`0${i + 1}`}</span>
                  <div>
                    <p className="font-display font-semibold text-ink">{topic.title}</p>
                    <p className="text-muted text-sm font-body">{topic.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Box>

          <Box>
            <h2 className="font-display font-bold text-xl text-ink mb-4">مصادر مقترحة للبحث</h2>
            <ul className="space-y-2 text-muted text-sm font-body list-disc pr-5">
              {suggestedSources.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Box>
        </div>

        <Box>
          <h2 className="font-display font-bold text-xl text-ink mb-6">
            خطة مقترحة لخمسة أشهر
          </h2>
          <div className="grid sm:grid-cols-5 gap-4">
            {fiveMonthPlan.map((m) => (
              <div key={m.month} className="rounded-xl border border-border bg-deep p-4">
                <p className="font-mono text-xs text-beacon mb-2">{m.month}</p>
                <p className="text-ink text-sm font-body">{m.focus}</p>
              </div>
            ))}
          </div>
        </Box>

        <Box>
          <h2 className="font-display font-bold text-xl text-ink mb-4">كتب موصى بها</h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted text-sm font-body">
            {recommendedBooks.map((book) =>
              book.url ? (
                <li key={book.title}>
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-beacon transition-colors"
                  >
                    {book.title} ↗
                  </a>
                </li>
              ) : (
                <li key={book.title}>{book.title}</li>
              )
            )}
          </ul>
        </Box>

        <div className="rounded-2xl border border-beacon/40 bg-beacon/5 p-6 text-center">
          <p className="text-ink font-body mb-3">{attribution.note}</p>
          <a
            href={`mailto:${attribution.email}`}
            className="inline-block px-6 py-2.5 rounded-full bg-beacon text-deep font-display font-bold hover:bg-beacon-soft transition-colors"
          >
            تواصل مع فريق الدعم عبر البريد الإلكتروني
          </a>
        </div>
      </section>
    </>
  );
}
