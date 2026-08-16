import type { IContactMessageRepository } from "../repositories/IContactMessageRepository";
import type { NewContactMessage } from "../../domain/ContactMessage";

export class ContactValidationError extends Error {}

export class ContactService {
  constructor(private repo: IContactMessageRepository) {}

  async submit(input: NewContactMessage) {
    const name = input.name?.trim();
    const email = input.email?.trim();
    const message = input.message?.trim();

    if (!name || name.length < 2) {
      throw new ContactValidationError("الاسم مطلوب (حرفان على الأقل)");
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new ContactValidationError("البريد الإلكتروني غير صالح");
    }
    if (!message || message.length < 5) {
      throw new ContactValidationError("الرسالة قصيرة جدًا");
    }

    return this.repo.create({ name, email, message });
  }
}
