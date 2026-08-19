// Pure domain type — no framework imports, per spec-kit/03-architecture.md
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface NewContactMessage {
  name: string;
  email: string;
  message: string;
}
