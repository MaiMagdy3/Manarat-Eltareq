import { PageHeader, Box, BoxGrid } from "@/components/PageSection";

export const metadata = { title: "عن المنصة — منارة الطريق" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="عن المنصة"
        body="منارة الطريق منصة مصممة لدعم الباحثين في كل مرحلة من رحلتهم البحثية، من جمع المصادر إلى نشر النتائج ومشاركة المجتمع العلمي."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <BoxGrid>
          <Box>
            <h3 className="font-display font-bold text-ink text-lg mb-2">رؤيتنا</h3>
            <p className="text-muted text-sm font-body leading-relaxed">
              إتاحة بيئة بحثية عربية متطورة توفر أدوات رقمية، موارد تعليمية، وتفاعل مجتمعي بمستوى
              احترافي.
            </p>
          </Box>
          <Box>
            <h3 className="font-display font-bold text-ink text-lg mb-2">
              محتوى د. محمود بسيوني
            </h3>
            <p className="text-muted text-sm font-body leading-relaxed mb-3">
              يُبنى هذا القسم على خبرة د. محمود بسيوني في البحث العلمي والكتابة الأكاديمية، مع
              تركيز خاص على دعم الباحثين الناشئين.
            </p>
            <ul className="space-y-2 text-muted text-sm font-body list-disc ps-5">
              <li>مصادر ومراجع مجمعة بعناية للبحث العلمي</li>
              <li>إرشاد عملي في تطوير الخطط البحثية</li>
              <li>ورش عمل وأدوات مساعدة في التوثيق وكتابة المقالات</li>
            </ul>
          </Box>
        </BoxGrid>
      </section>
    </>
  );
}
