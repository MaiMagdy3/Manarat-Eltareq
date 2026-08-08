import { PageHeader, Box, BoxGrid } from "@/components/PageSection";

export const metadata = { title: "أدوات ومختبر الباحث — منارة الطريق" };

export default function ResearcherToolsPage() {
  return (
    <>
      <PageHeader
        title="أدوات ومختبر الباحث"
        body="مجموعة أدوات متقدمة لتحليل البيانات، كتابة المراجع، إنشاء الاستبيانات، وإدارة المشاريع البحثية."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <BoxGrid>
          <Box>
            <h3 className="font-display font-bold text-ink text-lg mb-2">أدوات التخطيط</h3>
            <p className="text-muted text-sm font-body leading-relaxed">
              لوحات متابعة الأهداف، جدول المراجع، ومخططات تنظيم البحث مع تجربة مستخدم سلسة.
            </p>
          </Box>
          <Box>
            <h3 className="font-display font-bold text-ink text-lg mb-2">مختبر الدعم</h3>
            <p className="text-muted text-sm font-body leading-relaxed">
              بيئة افتراضية لتجربة الأفكار البحثية، بناء العروض، واستكشاف النماذج الأكاديمية.
            </p>
          </Box>
        </BoxGrid>
      </section>
    </>
  );
}
