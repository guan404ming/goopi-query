import { NextResponse, type NextRequest } from "next/server";

import { z } from "zod";

import { db } from "@/db";
import { merchandiseTable } from "@/db/schema";

const createMerchandiseRequestSchema = z.object({
  color: z.string(),
  name: z.string(),
  picUrl: z.string().url(),
  price: z.number(),
});

type CreateMerchandiseRequest = z.infer<typeof createMerchandiseRequestSchema>;

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);

  try {
    createMerchandiseRequestSchema.parse(data);
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const newMerchdise = data as CreateMerchandiseRequest;

  try {
    await db
      .insert(merchandiseTable)
      .values(newMerchdise)
      .onConflictDoNothing()
      .execute();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }

  return new NextResponse("OK", { status: 200 });
}
