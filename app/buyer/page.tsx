import Link from "next/link";
import { furnitureItems } from "@/lib/furnitureData";

export default function HomePage() {
  // Pick featured items from the SINGLE source of truth
  const featuredItems = furnitureItems.slice(0, 3);

  return (
    <div className="bg-[#f8f5f0]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2f2f2f] leading-tight mb-6">
            Design your home with confidence
          </h1>
          <p className="text-[#6b6b6b] text-lg mb-8 max-w-md">
            Discover furniture curated and endorsed by professional interior
            designers — tailored to your style and budget.
          </p>

          <div className="flex gap-4">
            <Link
              href="/explore"
              className="bg-[#3b2f2a] text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
              Explore designs
            </Link>
            <Link
              href="/search"
              className="border border-[#3b2f2a] text-[#3b2f2a] px-6 py-3 rounded-xl hover:bg-[#ede8df] transition"
            >
              Search by style
            </Link>
          </div>
        </div>

        {/* Logo / Hero image */}
        <div className="bg-white rounded-2xl p-10 shadow-sm flex justify-center">
          <img
            src="/decora-logo.png"
            alt="Decora logo"
            className="w-full max-w-md object-contain"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center text-[#2f2f2f] mb-12">
            How Decora works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-lg font-medium text-[#5a4a3f] mb-3">
                1. Choose your style
              </h3>
              <p className="text-sm text-[#7a6a5f]">
                Filter furniture by style, category, and budget.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#5a4a3f] mb-3">
                2. Get expert picks
              </h3>
              <p className="text-sm text-[#7a6a5f]">
                Every item is curated and endorsed by a designer.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#5a4a3f] mb-3">
                3. Save & shop confidently
              </h3>
              <p className="text-sm text-[#7a6a5f]">
                Save designs to moodboards or add them to your cart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ITEMS */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-semibold text-[#2f2f2f] mb-10">
          Featured Designer Picks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Link
              key={item.id}
              href={`/item/${item.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative">
                <span className="absolute top-4 left-4 bg-[#f1ede6] text-[#2f2f2f] text-xs px-3 py-1 rounded-full">
                  ✔ Designer Endorsed
                </span>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="p-4">
                <p className="font-medium text-[#2f2f2f]">
                  {item.name}
                </p>
                <p className="text-sm text-[#6b6b6b]">
                  €{item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
