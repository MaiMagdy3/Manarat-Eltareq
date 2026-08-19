import type { ContactMessage, NewContactMessage } from "../../domain/ContactMessage";

export interface IContactMessageRepository {
  create(input: NewContactMessage): Promise<ContactMessage>;
}
