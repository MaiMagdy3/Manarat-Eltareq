export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted font-body">
        <p>
          <strong className="text-ink font-display">منارة الطريق</strong> — منصة البحث العلمي
          المتكاملة للباحثين والمجتمع الأكاديمي.
        </p>
        <div className="flex gap-6">
          <a href="mailto:manarateltareq@gmail.com" className="hover:text-beacon transition-colors">
            manarateltareq@gmail.com
          </a>
          <a href="tel:+201550011662" className="hover:text-beacon transition-colors" dir="ltr">
            01550011662
          </a>
        </div>
      </div>
    </footer>
  );
}
