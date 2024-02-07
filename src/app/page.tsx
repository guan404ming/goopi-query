import { Banner } from "@/components/banner";
import { Merchant } from "@/components/merchant";
import { db } from "@/db";
import { merchantTable } from "@/db/schema";

export default async function Home() {
  const merchants = await db.select().from(merchantTable);
  console.log(merchants);
  return (
    <main className="flex min-h-screen w-full flex-col pt-16">
      <Banner />
      <div className="grid w-full grid-cols-2 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
        {merchants.map((merchant, idx) => (
          <Merchant key={idx} merchant={merchant}></Merchant>
        ))}
      </div>
    </main>
  );
}
