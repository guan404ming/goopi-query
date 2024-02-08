import { NextResponse, type NextRequest } from "next/server";

import { z } from "zod";

import { db } from "@/db";
import { postTable } from "@/db/schema";

const createPostRequestSchema = z.object({
  merchandiseId: z.number(),
  url: z.string().url(),
});

type CreatePostRequest = z.infer<typeof createPostRequestSchema>;

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);

  try {
    createPostRequestSchema.parse(data);
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { merchandiseId, url } = data as CreatePostRequest;

  try {
    await db
      .insert(postTable)
      .values({
        merchandiseId,
        postUrl: url,
      })
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
