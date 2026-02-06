import Link from "next/link";
import { furnitureItems } from "@/app/data/furnitureData";
import { designers } from "@/app/data/designersData";

export default async function DesignerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const designerId = Number(id);

  const designer = designers.find((d) => d.id === designerId);

  if (!designer) {
    return <div className="p-8">Designer not found</div>;
  }

  const endorsedItems = furnitureItems.filter(
    (item) => item.designerId === designerId
  );

  return (
    <div className="min-h-screen bg-[#f8f5f0] p-8">
      <div className="max-w-5xl mx-auto">
        {/* Designer header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm flex gap-6 items-center mb-10">
          <img
            src={designer.image}
            alt={designer.name}
            className="w-28 h-28 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-semibold text-[#2f2f2f]">
              {designer.name}
            </h1>
            <span className="inline-block bg-[#f1ede6] text-[#2f2f2f] text-sm px-4 py-1 rounded-full my-2">
              ✔ Verified Designer
            </span>
            <p className="text-[#6b6b6b] max-w-md">
              {designer.bio}
            </p>
          </div>
        </div>

        {/* Endorsed items */}
        <h2 className="text-xl font-semibold mb-6 text-[#2f2f2f]">
          Endorsed Designs
        </h2>

        {endorsedItems.length === 0 ? (
          <p className="text-[#6b6b6b]">
            No designs endorsed yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {endorsedItems.map((item) => (
              <Link
                key={item.id}
                href={`/item/${item.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="font-medium text-[#2f2f2f]">
                    {item.name}
                  </p>
                  <p className="text-sm text-[#6b6b6b]">
                    ${item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
