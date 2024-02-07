import { Banner } from "@/components/banner";
import { Merchandise } from "@/components/merchandise";
import { db } from "@/db";
import { bannerTable, merchandiseTable } from "@/db/schema";

export default async function Home() {
  const merchandiseList = await db.select().from(merchandiseTable);
  const bannerList = await db.select().from(bannerTable);

  return (
    <main className="flex min-h-screen w-full flex-col pt-16">
      <Banner bannerList={bannerList} />
      <div className="grid w-full grid-cols-2 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
        {merchandiseList.map((merchandise, idx) => (
          <Merchandise key={idx} merchandise={merchandise}></Merchandise>
        ))}
      </div>
    </main>
  );
}
