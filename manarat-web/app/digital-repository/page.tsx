import { PageHeader, Box } from "@/components/PageSection";

export const metadata = { title: "المستودع الرقمي — منارة الطريق" };

export default function DigitalRepositoryPage() {
  return (
    <>
      <PageHeader
        title="المستودع الرقمي"
        body="احفظ وشارك المصادر الأكاديمية، الأوراق البحثية، والمراجع الرقمية في مكان واحد آمن ومنظم."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <Box>
          <h2 className="font-display font-bold text-xl text-ink mb-4">الدعم الكامل للباحث</h2>
          <ul className="space-y-2 text-muted font-body list-disc pr-5">
            <li>مكتبة الأبحاث المفتوحة</li>
            <li>أرشيف الوثائق والمنهجيات</li>
            <li>مجموعات بحث متنوعة حسب التخصصات</li>
          </ul>
        </Box>
      </section>
    </>
  );
}
