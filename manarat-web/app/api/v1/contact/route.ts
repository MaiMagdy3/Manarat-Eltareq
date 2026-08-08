import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { ContactService, ContactValidationError } from "@/features/contact/application/services/ContactService";
import { SupabaseContactMessageRepository } from "@/features/contact/infrastructure/repositories/SupabaseContactMessageRepository";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { data: null, error: { code: "BAD_REQUEST", message: "بيانات غير صالحة" }, meta: null },
      { status: 400 }
    );
  }

  const supabase = createClient();
  const service = new ContactService(new SupabaseContactMessageRepository(supabase));

  try {
    const created = await service.submit(body);
    return NextResponse.json({ data: created, error: null, meta: null }, { status: 201 });
  } catch (err) {
    if (err instanceof ContactValidationError) {
      return NextResponse.json(
        { data: null, error: { code: "VALIDATION_ERROR", message: err.message }, meta: null },
        { status: 422 }
      );
    }
    console.error("[contact] unexpected error", err);
    return NextResponse.json(
      { data: null, error: { code: "SERVER_ERROR", message: "تعذر إرسال الرسالة، حاول لاحقًا" }, meta: null },
      { status: 500 }
    );
  }
}
