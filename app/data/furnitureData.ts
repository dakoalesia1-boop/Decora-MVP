export type FurnitureItem = {
  id: number;
  name: string;
  price: number;
  style: string;
  type: string;
  image: string;
  designerId: number;
};

export const furnitureItems: FurnitureItem[] = [
    // Sofas
  { id: 1, name: "Linen Modern Sofa", price: 1200, style: "Modern", type: "Sofa", image: "https://ak1.ostkcdn.com/images/products/is/images/direct/6a3c5ce2f00a4518ae934e54b42559a0f222727d/Mid-century-Modern-Cozy-Sectional-Linen-Sofa.jpg", designerId: 1},
  { id: 2, name: "Scandinavian Sofa", price: 1400, style: "Scandinavian", type: "Sofa", image: "https://sohnne.com/wp-content/uploads/2024/07/Little-Sherpa-Loveseat-1-1.jpg", designerId: 2 },
  { id: 3, name: "Luxury Velvet Sofa", price: 2200, style: "Luxury", type: "Sofa", image: "https://s.alicdn.com/@sc02/kf/U801be1a11e9e434b9834c0a2ee292d26u.jpg_720x720q50.jpg", designerId: 3 },
  { id: 4, name: "Japandi Low Sofa", price: 1600, style: "Japandi", type: "Sofa", image: "https://japandistore.com/cdn/shop/files/BeigeUpholsteredJapandiSofa.png?v=1748612665&width=1080", designerId: 1},
  { id: 5, name: "Mid-Century Sofa", price: 1800, style: "Mid-Century", type: "Sofa", image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41", designerId: 2 },

  // Chairs
  { id: 6, name: "Minimalist Chair", price: 300, style: "Minimalist", type: "Chair", image: "https://i.pinimg.com/564x/c2/c9/b5/c2c9b543faa4dc422f798a9bb77f2118.jpg", designerId: 1 },
  { id: 7, name: "Bohemian Rattan Chair", price: 450, style: "Bohemian", type: "Chair", image: "https://ak1.ostkcdn.com/images/products/is/images/direct/c33100e64aa51411b1a8d24e537cdeccd2af13b7/Jayden-Bohemian-Upholstered-Rattan-Accent-Chair-Natural-Brown-White.jpg?impolicy=medium", designerId: 2 },
  { id: 8, name: "Industrial Metal Chair", price: 380, style: "Industrial", type: "Chair", image: "https://northdeco.com/cdn/shop/files/SillaTolikND-0820-POLISHED_01.jpg?v=1737039177&width=1445", designerId: 3},
  { id: 9, name: "Classic Accent Chair", price: 520, style: "Classic", type: "Chair", image: "https://m.media-amazon.com/images/I/91NvU3W0l6L._AC_UF894,1000_QL80_.jpg",designerId: 1},
  { id: 10, name: "Contemporary Lounge Chair", price: 600, style: "Contemporary", type: "Chair", image: "https://img.archiexpo.com/images_ae/photo-mg/11531-19414575.jpg", designerId: 2 },

  // Tables
  { id: 11, name: "Oak Dining Table", price: 1300, style: "Scandinavian", type: "Table", image: "https://andersen-furniture.com/app/uploads/2023/05/T7-220_95_H725_B2-bench_AC2-oak-oil_kvadrat-Re-Wool-0378_banner-2.jpg", designerId: 3 },
  { id: 12, name: "Glass Modern Table", price: 900, style: "Modern", type: "Table", image: "https://shophouzz.com/cdn/shop/files/46778f28-8846-4a27-9e03-c0af868e41bf.jpg?v=1750815635&width=876", designerId: 1 },
  { id: 13, name: "Japandi Coffee Table", price: 650, style: "Japandi", type: "Table", image: "https://img5.su-cdn.com/cdn-cgi/image/width=1000,height=1000/mall/file/2024/06/24/c6b463317ca123ed0d4931786f0ee170.jpg", designerId: 2 },
  { id: 14, name: "Industrial Dining Table", price: 1500, style: "Industrial", type: "Table", image: "https://www.curiosityinteriors.co.uk/images/ruan-industrial-dining-table-p3128-37086_zoom.jpg", designerId: 2 },
  { id: 15, name: "Classic Wooden Table", price: 1100, style: "Classic", type: "Table", image: "https://niagarafurniture.com/wp-content/uploads/2015/09/DSC06459.jpg", designerId: 2 },

  // Beds
  { id: 16, name: "Luxury King Bed", price: 2400, style: "Luxury", type: "Bed", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTSSHWrBVYGp7b3dkiHp3jDwTJPYbrPich-yf-fzikHIS7ILDCrCLQrkQ3XBuAaUto0VuBTS4eAG17lrD5ph9gLDbFVFBO-nrqysVvGHEwMMacMTzxCh_fQFA", designerId: 3 },
  { id: 17, name: "Minimal Platform Bed", price: 1400, style: "Minimalist", type: "Bed", image: "https://media.glamourmagazine.co.uk/photos/686bd22834a743cbc8820a13/3:4/w_748%2Cc_limit/Low%2520Platform%2520bed%252007072025%25201.jpg", designerId: 1 },
  { id: 18, name: "Japandi Bed Frame", price: 1700, style: "Japandi", type: "Bed", image: "https://pictureserver.net/pic_storage/pic/39/9d/undef_src_sa_picid_931314_x_1000_type_whitesh_image.webp?ver=24", designerId: 1 },
  { id: 19, name: "Modern Upholstered Bed", price: 1900, style: "Modern", type: "Bed", image: "https://25home.com/cdn/shop/files/6_d3d6eedc-c2cf-42fe-87f5-7589e98864a8.jpg?v=1742363062&width=600", designerId: 1 },
  { id: 20, name: "Classic Wooden Bed", price: 1600, style: "Classic", type: "Bed", image: "https://www.royalzig.com/uploads/cache/cache-il_1588xn.7207978188_pxbx1.jpg", designerId: 2 },

  // Storage
  { id: 21, name: "Modern Sideboard", price: 1100, style: "Modern", type: "Storage", image: "https://sena-homefurniture.co.uk/wp-content/uploads/2024/04/Screenshot_2.jpg", designerId: 3 },
  { id: 22, name: "Scandinavian Shelf", price: 700, style: "Scandinavian", type: "Storage", image: "https://i.etsystatic.com/15145452/r/il/aa48c8/1458065277/il_fullxfull.1458065277_rhov.jpg", designerId: 2 },
  { id: 23, name: "Industrial Cabinet", price: 1300, style: "Industrial", type: "Storage", image: "https://cdn11.bigcommerce.com/s-o8woff/images/stencil/1280x1280/products/2399/4361/apihpyl6f__96067.1582558817.jpg?c=2", designerId: 1 },
  { id: 24, name: "Minimal Storage Unit", price: 650, style: "Minimalist", type: "Storage", image: "https://i5.walmartimages.com/asr/da3a2616-6148-4aa1-84da-1f23772eda7f.506e7991ea21d5cad4e71f0e04d288bf.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", designerId: 3 },
  { id: 25, name: "Luxury Wardrobe", price: 2600, style: "Luxury", type: "Storage", image: "https://wideconcepts.in/wp-content/uploads/2023/02/Hinged-Wardrobe-3.png", designerId: 1 },

  // Lighting
  { id: 26, name: "Modern Floor Lamp", price: 400, style: "Modern", type: "Lighting", image: "https://s7d9.scene7.com/is/image/NationalBusinessFurniture/LTS-226282_Black_Lifestyle?hei=750&wid=750", designerId: 2 },
  { id: 27, name: "Japandi Pendant Lamp", price: 520, style: "Japandi", type: "Lighting", image: "https://www.lightingstyles.co.uk/pics/100/japandi-style-pendants-2-sizes-minimal-neutral-style.jpg", designerId: 1 },
  { id: 28, name: "Industrial Ceiling Lamp", price: 480, style: "Industrial", type: "Lighting", image: "https://i.ebayimg.com/images/g/MbgAAOSw5gtkTNlj/s-l1600.jpg", designerId: 3 },
  { id: 29, name: "Classic Table Lamp", price: 350, style: "Classic", type: "Lighting", image: "https://www.harvestmoon.co.uk/images/lighting/martino-tab-lp-600-2.jpg", designerId: 3 },
  { id: 30, name: "Luxury Chandelier", price: 2100, style: "Luxury", type: "Lighting", image: "https://m.media-amazon.com/images/I/717Dw4gTc8L._AC_UF894,1000_QL80_.jpg", designerId: 1 },

  // Desks (to reach 50)
  { id: 31, name: "Modern Work Desk", price: 900, style: "Modern", type: "Desk", image: "https://www.roomservice360.com/media/catalog/product/cache/c65f780c40071b42a4fa780b5ddbf5c2/d/i/diver-desk-03.jpg", designerId: 2 },
  { id: 32, name: "Scandinavian Desk", price: 850, style: "Scandinavian", type: "Desk", image: "https://i.etsystatic.com/11515137/r/il/7a29e5/3824967036/il_570xN.3824967036_5qa7.jpg", designerId: 1 },
  { id: 33, name: "Industrial Desk", price: 1100, style: "Industrial", type: "Desk", image: "https://modernindustrialfurniture.com/cdn/shop/files/Machinist-wood-brace-1.jpg?v=1757531537", designerId: 2 },
  { id: 34, name: "Minimal Writing Desk", price: 700, style: "Minimalist", type: "Desk", image: "https://s3-ap-southeast-2.amazonaws.com/handkrafted.web.production.attachments/images/000/008/899/small/walnut-brass-writing-desk-iso.jpg?1568515350", designerId: 3 },
  { id: 35, name: "Luxury Office Desk", price: 2000, style: "Luxury", type: "Desk", image: "https://laporta.co.uk/wp-content/uploads/Luxury-office-furniture-ceo-desk-min.webp", designerId: 1 },

  // Extra to reach 50
  { id: 36, name: "Bohemian Side Table", price: 450, style: "Bohemian", type: "Table", image: "https://i5.walmartimages.com/seo/bali-pari-Nina-Boho-End-Table-Round-Natural_c470308c-e610-420c-96f8-1ddff837b1ab.3fb9abec7891821f06c729f2dba2994e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", designerId: 2 },
  { id: 37, name: "Japandi Armchair", price: 650, style: "Japandi", type: "Chair", image: "https://img5.su-cdn.com/cdn-cgi/image/width=1000,height=1000/mall/file/2023/04/26/e73c90f924d676f3e645a9aa67b609ac.jpg", designerId: 3},
  { id: 38, name: "Mid-Century Chair", price: 700, style: "Mid-Century", type: "Chair", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHX8S8f34tvTwD5iIG9b-CMrw_V2DjE0sGcuHE9tUr80r_mIxN7a-VTo9T_kC9v44jqdhixtGfW1AIwBhHXW2faw8jNAp4Qk7_iU-SpWj2R6-yPsInF5sB", designerId: 3 },
  { id: 39, name: "Contemporary Sofa", price: 1900, style: "Contemporary", type: "Sofa", image: "https://img.archiexpo.es/images_ae/photo-g/150252-15570546.jpg", designerId: 1 },
  { id: 40, name: "Classic Coffee Table", price: 850, style: "Classic", type: "Table", image: "https://www.juliettesinteriors.co.uk/wp-content/uploads/2019/11/Baroque-Inspired-Classic-Italian-Glass-Coffee-Table-1.jpg", designerId: 3 },

  { id: 41, name: "Modern Nightstand", price: 500, style: "Modern", type: "Storage", image: "https://wooden-it-be-nice.in/wp-content/uploads/2022/09/dg.jpg", designerId: 2},
  { id: 42, name: "Luxury Nightstand", price: 900, style: "Luxury", type: "Storage", image: "https://www.essentialhome.eu/blog/wp-content/uploads/2021/02/The-20-Luxury-Nightstands-You-Need-In-Your-Home-Now_3.jpg", designerId: 2 },
  { id: 43, name: "Minimal Wall Shelf", price: 320, style: "Minimalist", type: "Storage", image: "https://i.etsystatic.com/6977484/r/il/21c8bd/7425158431/il_570xN.7425158431_j512.jpg", designerId: 1},
  { id: 44, name: "Industrial Bookshelf", price: 1200, style: "Industrial", type: "Storage", image: "https://belleze.com/cdn/shop/products/014-hg-44805-dwa_03d.jpg?v=1765959439&width=1000", designerId: 2 },
  { id: 45, name: "Japandi Storage Cabinet", price: 1400, style: "Japandi", type: "Storage", image: "https://www.globalfurniture.nl/wp-content/uploads/2024/10/Tide-Japandi-4-deurs-bergkast-laag-bruin-open.jpg", designerId: 1 },

  { id: 46, name: "Modern Reading Lamp", price: 380, style: "Modern", type: "Lighting", image: "https://m.media-amazon.com/images/I/81i0A5EhmwL._AC_UF894,1000_QL80_.jpg", designerId: 3 },
  { id: 47, name: "Bohemian Floor Lamp", price: 520, style: "Bohemian", type: "Lighting", image: "https://i5.walmartimages.com/asr/4ee63067-c219-4fed-b683-8516fac9d760.b3ad39a4ea25085be29f2034b99f7f27.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", designerId: 2 },
  { id: 48, name: "Mid-Century Lamp", price: 460, style: "Mid-Century", type: "Lighting", image: "https://m.media-amazon.com/images/I/71d63lGUEpL._AC_UF894,1000_QL80_.jpg", designerId: 2 },
  { id: 49, name: "Contemporary Pendant", price: 780, style: "Contemporary", type: "Lighting", image: "https://chandelierias.com/cdn/shop/products/chandelierias-modern-three-lights-cluster-glass-pendant-lighting-pendant-488207_900x.jpg?v=1663615074", designerId: 1 },
  { id: 50, name: "Classic Desk Lamp", price: 410, style: "Classic", type: "Lighting", image: "https://amoslighting.co.uk/cdn/shop/files/nkuku-ulani-vintage-bankers-desk-lamp-antique-brass-clear-amos-lighting-home.jpg?v=1724240764&width=1200", designerId: 3 },
];