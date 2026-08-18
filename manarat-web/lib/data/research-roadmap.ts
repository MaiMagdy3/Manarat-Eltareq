// Structured content parsed from: "Dr. Bassiony Research Educational Resources —
// Self-Learning Plan (Continuously Updated)".
// This will migrate into the `roadmaps` + `resources` tables (see
// docs/spec-kit/04-database-schema.md) once the Resources CRUD ships in Phase 4/5.
// For now it renders as real static content so the page is genuinely usable today.

export type ResourceLink = {
  title: string;
  url?: string; // omitted when the source PDF didn't include a working link
  note?: string;
  language?: "ar" | "en";
};

export type RoadmapLevel = {
  id: string;
  levelLabel: string; // e.g. "Beginner"
  arabicTag: string; // the playful tag from the original plan, e.g. "Meh, Research"
  description: string;
  groups: { heading: string; items: ResourceLink[] }[];
};

export const roadmapLevels: RoadmapLevel[] = [
  {
    id: "beginner",
    levelLabel: "المستوى المبتدئ",
    arabicTag: "Meh, Research",
    description: "نقطة انطلاق لأي باحث جديد: فهم فكرة البحث العلمي، وأدوات البحث في الأدبيات، وأساسيات الإحصاء الحيوي.",
    groups: [
      {
        heading: "مصادر عربية",
        items: [
          { title: "نظرة عامة على مسار البحث العلمي (Research Career Overview)", url: "https://youtu.be/2GP2u3eR77g", language: "ar" },
          { title: "بودكاست: ما لا يسع الباحث جهله — الحلقة الأولى", url: "https://youtu.be/WN9x3EDhd_Q", language: "ar" },
          { title: "أساسيات البحث العلمي (قائمة تشغيل)", url: "https://youtube.com/playlist?list=PLuDFktFSWZ_XVufo7h9bDIerKoo7s3ouA", language: "ar" },
          { title: "البحث في الأدبيات العلمية (Literature Search)", url: "https://youtu.be/WqTmCCeSFe8", language: "ar" },
          { title: "منهجيات البحث — MHRN (الجزء الأول)", url: "https://youtu.be/sCnAm4kL6XY", language: "ar" },
          { title: "منهجيات البحث — MHRN (الجزء الثاني)", url: "https://youtu.be/Ucjfbyv8z04", language: "ar" },
          { title: "الإحصاء الحيوي BioStatistics (قائمة تشغيل)", url: "https://youtube.com/playlist?list=PLt0thylmbOcnPXco89AvM6c1sN1pr0vZF", language: "ar" },
          { title: "الإحصاء Statistics (قائمة تشغيل)", url: "https://youtube.com/playlist?list=PLnruVGowQilf3qPLK-Jhz2Suc06DBH5Cz", language: "ar" },
          { title: "فيديوهات خفيفة تمهيدية (اختر منها ما تحتاجه)", url: "https://www.youtube.com/playlist?list=PL9GrBMsvivVUzs49w_nFdKu74AtwFdH5H", language: "ar" },
          { title: "Egypt Scholars: كورس تأسيسي لطلبة كلية الطب", url: "https://youtube.com/playlist?list=PLt0thylmbOcnZDtQoVo9niJTCKw5soPaz", language: "ar" },
          { title: "كورس تأسيسي لطلبة كلية العلوم وباقي الكليات العلمية", url: "https://youtube.com/playlist?list=PLD3dGfojEhOKdudANtVF8LT7CBqAAtxnU", language: "ar" },
        ],
      },
      {
        heading: "English resources",
        items: [
          { title: "Research question (part 1)", url: "https://youtu.be/xbTsGwZ_1yo", language: "en" },
          { title: "Research question (part 2)", url: "https://youtu.be/CMjo3B69a8k", language: "en" },
          { title: "FunCats Program — Mayo Clinic", url: "https://www.mayo.edu/research/centers-programs/center-clinical-translational-science/education/fundamentals-of-clinical-and-translational-science-funcats-program", language: "en" },
          { title: "Clinical research fundamentals (playlist)", url: "https://youtube.com/playlist?list=PLKav5fAJIAOJark_WyTcOb_wKIwjNJ35s", language: "en" },
          { title: "Book: How to Read a Paper — The Basics of Evidence Based Medicine", url: "https://t.me/DrBeso0/83", language: "en" },
        ],
      },
    ],
  },
  {
    id: "intermediate",
    levelLabel: "المستوى المتوسط",
    arabicTag: "Ah, Research",
    description: "بعد إتقان الأساسيات: مناهج البحث السريري، الكتابة الأكاديمية، والإحصاء الحيوي التطبيقي في الصحة العامة.",
    groups: [
      {
        heading: "دورات ومصادر",
        items: [
          { title: "Introduction to the Principles and Practice of Clinical Research (IPPCR)", url: "https://ocreco.od.nih.gov/courses/ippcrRegistration.html", language: "en" },
          { title: "Academic English: Writing Specialization — UC Davis (Coursera, 5 courses)", url: "https://www.coursera.org/specializations/academic-english", language: "en" },
          { title: "Biostatistics in Public Health Specialization — Johns Hopkins (Coursera, 4 courses)", url: "https://www.coursera.org/specializations/biostatistics-public-health", language: "en" },
          { title: "Egypt Scholars: Clinical research school program", url: "https://youtube.com/playlist?list=PLt0thylmbOcnZDtQoVo9niJTCKw5soPaz", language: "ar" },
          { title: "An Introduction to Systematic Review and Meta-analysis", note: "الرابط غير واضح في الملف المصدر", language: "en" },
          { title: "Introduction to Systematic Review and Meta-Analysis — Coursera", url: "https://www.coursera.org/learn/systematic-review", language: "en" },
          { title: "Clinical trials / proposal writing (playlist)", url: "https://youtube.com/playlist?list=PL9GrBMsvivVWMywC_8aSJqU6RdwLmbVmC", language: "en" },
        ],
      },
    ],
  },
  {
    id: "advanced",
    levelLabel: "المستوى المتقدم",
    arabicTag: "I Can, Research",
    description: "تصميم الدراسات، التجارب السريرية، مراجعات Cochrane المنهجية، والتمكن من البرمجيات الإحصائية.",
    groups: [
      {
        heading: "تصميم الدراسات والتجارب السريرية",
        items: [
          { title: "Study Design — IPPCR 2015: Design of Epidemiologic Studies", note: "الرابط غير متوفر في الملف المصدر", language: "en" },
          { title: "Design and Interpretation of Clinical Trials — Coursera", url: "https://www.coursera.org/learn/clinical-trials", language: "en" },
          { title: "Cochrane: Systematic review and meta-analysis (playlist)", url: "https://youtube.com/playlist?list=PLgp17bk2nACMassfBMJRbfSSvpTfMgLxu", language: "en" },
          { title: "How to send professional emails and find research positions", url: "https://www.youtube.com/playlist?list=PLAT9xVUZyXRTGH6LzON2IqsdzzCkeWs0a", language: "en" },
        ],
      },
      {
        heading: "تدريب على البرمجيات الإحصائية",
        items: [
          { title: "SPSS (playlist)", url: "https://www.youtube.com/playlist?list=PLAT9xVUZyXRTGH6LzON2IqsdzzCkeWs0a", language: "ar" },
          { title: "R — مصدر عربي (playlist)", url: "https://youtube.com/playlist?list=PLiEE9iF6uemvnKoYt-tpU6npcEog4yEfM", language: "ar" },
          { title: "R — English source (live)", url: "https://www.youtube.com/live/Q5g6lYUn6Q4", language: "en" },
        ],
      },
    ],
  },
];

export const recommendedBooks: ResourceLink[] = [
  { title: "Research Papers for Dummies", url: "https://t.me/DrBeso0/84" },
  { title: "Ethics in Science — John D. Anglo" },
  { title: "Research Design: Qualitative, Quantitative, and Mixed Methods Approaches — John W. Creswell" },
  { title: "Basic & Clinical Biostatistics, 4th Edition" },
  { title: "Clinical Research Methods for Surgeons" },
  { title: "Research Methodology in the Medical and Biological Sciences" },
  { title: "Research Methodology: A Practical and Scientific Approach" },
  { title: "Crash Course: Biomedical Research" },
];

export const mainTopicsInOrder = [
  { title: "المنهج العلمي", body: "الملاحظة، طرح الأسئلة، صياغة الفرضيات، التجريب، التحليل، واستخلاص النتائج." },
  { title: "الإحصاء الحيوي", body: "أنواع المتغيرات والبيانات، تلخيص البيانات وتصويرها، الاحتمالية، والدلالة الإحصائية." },
  { title: "أخلاقيات البحث العلمي", body: "الموضوعية، النزاهة، الحرص، العدالة، واحترام المشاركين في الدراسة." },
];

export const suggestedSources = [
  "المجلات المُحكَّمة: PubMed، ScienceDirect، JAMA، NEJM",
  "قواعد البيانات الأكاديمية: Google Scholar، Scopus، Web of Science",
  "الكتب والمراجع الموصى بها أعلاه",
  "الدورات عبر الإنترنت: Coursera، edX، ومقاطع YouTube المذكورة",
  "مراكز الأبحاث والجامعات، والاستفادة من مكتباتها ومواردها",
];

export const fiveMonthPlan = [
  { month: "الشهر الأول", focus: "المنهج العلمي وأخلاقيات البحث" },
  { month: "الشهر الثاني", focus: "أساسيات الإحصاء الحيوي" },
  { month: "الشهر الثالث", focus: "مهارات مراجعة الأدبيات العلمية" },
  { month: "الشهر الرابع", focus: "بنية الورقة البحثية والكتابة الأكاديمية" },
  { month: "الشهر الخامس", focus: "تصميم الدراسات البحثية" },
];

export const attribution = {
  author: "فريق الدعم",
  email: "manarateltareq@gmail.com",
  note: "للمزيد من المعلومات أو التدريب، تواصل مع فريق الدعم عبر البريد الإلكتروني: manarateltareq@gmail.com.",
};
