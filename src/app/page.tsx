import { Banner } from "@/components/banner";
import { Merchant } from "@/components/merchant";

export default function Home() {
  const merchats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between pt-20">
      <Banner />
      <div className="grid w-full grid-cols-2 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
        {merchats.map((merchant, idx) => (
          <Merchant key={idx}></Merchant>
        ))}
      </div>
    </main>
  );
}
