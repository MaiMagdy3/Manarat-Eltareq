import { PageHeader, Box } from "@/components/PageSection";

export const metadata = { title: "الفعاليات والتطوير المهني — منارة الطريق" };

export default function EventsCareerPage() {
  return (
    <>
      <PageHeader
        title="الفعاليات والتطوير المهني"
        body="تابع ورش العمل، الندوات، البرامج التدريبية، ومسارات التطوير المهني المخصصة للباحثين."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <Box>
          <h2 className="font-display font-bold text-xl text-ink mb-4">جداول الفعاليات</h2>
          <ul className="space-y-2 text-muted font-body list-disc ps-5">
            <li>ندوات شهرية في منهجية البحث</li>
            <li>دورات تطوير مهني وورش كتابة المقالات</li>
            <li>لقاءات حوارية مع أكاديميين ومختصين</li>
          </ul>
        </Box>
      </section>
    </>
  );
}
