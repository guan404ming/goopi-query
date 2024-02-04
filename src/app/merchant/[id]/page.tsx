import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function MerchantPage() {
  //   const merchats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-6 pt-20">
      <div className="grid w-full grid-cols-10 gap-x-4">
        <Card className="col-span-8 flex">
          <img
            className="max-h-[250px]"
            src="https://shoplineimg.com/597d718359d52417b70007f8/64fdcd97d5bb54368adaaf4f/800x.webp?source_format=jpg"
            alt="gof-p5"
          />

          <div className="space-y-2 p-6">
            <h1 className="text-2xl font-bold">
              “Gof-P5” Hyperbolic Utility Track Pants
            </h1>
            <div className="space-x-2">
              <Badge>l-grey</Badge>
              <Badge>l-grey</Badge>
              <Badge>l-grey</Badge>
            </div>
            <p className="text-lg">$3980</p>
          </div>
        </Card>
        <Card className="col-span-2"></Card>
      </div>
    </main>
  );
}
