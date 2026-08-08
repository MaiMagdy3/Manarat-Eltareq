import { PageHeader, Box } from "@/components/PageSection";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "اتصل بنا — منارة الطريق" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="اتصل بنا"
        body="للاستفسارات، الدعم، أو التعاون العلمي، نحن هنا لمساعدتك."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-6">
        <Box>
          <h2 className="font-display font-bold text-xl text-ink mb-4">بيانات التواصل</h2>
          <p className="text-muted font-body mb-2">
            البريد الإلكتروني:{" "}
            <a href="mailto:manarateltareq@gmail.com" className="text-beacon hover:underline">
              manarateltareq@gmail.com
            </a>
          </p>
          <p className="text-muted font-body" dir="ltr">
            هاتف:{" "}
            <a href="tel:+201550011662" className="text-beacon hover:underline">
              01550011662
            </a>
          </p>
        </Box>
        <Box>
          <h2 className="font-display font-bold text-xl text-ink mb-4">أرسل رسالة</h2>
          <ContactForm />
        </Box>
      </section>
    </>
  );
}
