import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest, res: NextResponse) {
  const { id } = await req.json();
  if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY) {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );
    const { data } = await supabase.from("blog").select().eq("id", id);
    if (data && data.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ id: data });
  }
}
