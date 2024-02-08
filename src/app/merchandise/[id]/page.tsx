import Image from "next/image";

import { eq } from "drizzle-orm";
import { Bell } from "lucide-react";

import { AddDialog } from "@/components/add-dialog";
import { Post } from "@/components/post";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/db";
import { merchandiseTable, postTable } from "@/db/schema";

export default async function MerchandisePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const [merchandise] = await db
    .select()
    .from(merchandiseTable)
    .where(eq(merchandiseTable.id, parseInt(id)));
  const posts = await db
    .select()
    .from(postTable)
    .where(eq(postTable.merchandiseId, merchandise.id));

  return (
    <main className="z-10 flex min-h-screen w-full flex-col items-center overflow-x-hidden pt-16">
      <div className="flex max-md:flex-col">
        <AspectRatio ratio={1 / 1}>
          <Image
            width={"1200"}
            height={"1200"}
            src={merchandise.picUrl}
            alt={merchandise.name}
            className="w-full rounded-md object-cover"
          />
        </AspectRatio>

        <div className="space-y-4 p-6">
          <h1 className="text-xl font-semibold">{merchandise.name}</h1>
          <div className="text-md flex space-x-2">
            <Badge>{merchandise.color}</Badge>
            <Badge>${merchandise.price}</Badge>
          </div>

          <div className="flex space-x-2">
            <AddDialog />
            <Button
              variant={"outline"}
              className="flex w-full items-center space-x-2 border-black shadow-sm"
            >
              <Bell size={16} />
              <span className="mt-0.25">Report Issue</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6 w-full px-6">
        <Separator />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <Post key={post.id} url={post.postUrl} width={328} />
        ))}
      </div>
    </main>
  );
}
