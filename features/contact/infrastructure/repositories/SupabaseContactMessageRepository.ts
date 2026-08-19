import type { SupabaseClient } from "@supabase/supabase-js";
import type { IContactMessageRepository } from "../../application/repositories/IContactMessageRepository";
import type { ContactMessage, NewContactMessage } from "../../domain/ContactMessage";

export class SupabaseContactMessageRepository implements IContactMessageRepository {
  constructor(private supabase: SupabaseClient) {}

  async create(input: NewContactMessage): Promise<ContactMessage> {
    const { data, error } = await this.supabase
      .from("contact_messages")
      .insert({ name: input.name, email: input.email, message: input.message })
      .select("id, name, email, message, created_at")
      .single();

    if (error) throw error;

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      message: data.message,
      createdAt: data.created_at,
    };
  }
}
