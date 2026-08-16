import { PageHeader, Box } from "@/components/PageSection";

export const metadata = { title: "مجتمع الباحثين — منارة الطريق" };

export default function ResearcherCommunityPage() {
  return (
    <>
      <PageHeader
        title="مجتمع الباحثين"
        body="انضم لمجتمع من الباحثين المتعاونين، شارك خبراتك، واطلع على الفرص والأفكار الملهمة."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <Box>
          <h2 className="font-display font-bold text-xl text-ink mb-4">قنوات التواصل</h2>
          <ul className="space-y-2 text-muted font-body list-disc pr-5">
            <li>منتديات النقاش العلمي</li>
            <li>مجموعات الدعم البحثية</li>
            <li>شبكات المساعدة والتوجيه الأكاديمي</li>
          </ul>
        </Box>
      </section>
    </>
  );
}
