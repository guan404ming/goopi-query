import Image from "next/image";

import { eq } from "drizzle-orm";

import { Post } from "@/components/post";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { db } from "@/db";
import { merchantTable } from "@/db/schema";

export default async function MerchantPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const [merchant] = await db
    .select()
    .from(merchantTable)
    .where(eq(merchantTable.id, parseInt(id)));

  return (
    <main className="z-10 flex min-h-screen w-full flex-col items-center overflow-x-hidden pt-16">
      <div className="flex max-md:flex-col">
        <AspectRatio ratio={1 / 1}>
          <Image
            width={"1200"}
            height={"1200"}
            src={merchant.picUrl}
            alt={merchant.name}
            className="w-full rounded-md object-cover"
          />
        </AspectRatio>

        <div className="space-y-2 p-6">
          <h1 className="text-xl font-semibold">{merchant.name}</h1>
          <div className="text-md flex space-x-2 border-b-2 pb-6">
            <Badge>{merchant.color}</Badge>
            <Badge>${merchant.price}</Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Post
          url="https://www.instagram.com/p/C26nSewJAsC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={330}
        />
        <Post
          url="https://www.instagram.com/p/C26nSewJAsC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <Post
          url="https://www.instagram.com/p/C26nSewJAsC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <Post
          url="https://www.instagram.com/p/C26nSewJAsC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />

        <Post
          url="https://www.instagram.com/p/C26nSewJAsC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
      </div>
    </main>
  );
}
