import React from "react";
import ProductCard from "./ProductCard";

export default function BestSellingProducts() {
  const products = [
    {
      id: 1,
      name: "Cool ear-in headphones",
      price: "$50",
      img: "https://cdn.sanity.io/images/ks2i9q1g/production/2dcd6804ac04c28574e5bf088348e9459121166e-800x800.webp",
      rating: 4,
      reviews: 20,
      details: "Use these while working-out",
      images: [
        "https://cdn.sanity.io/images/ks2i9q1g/production/2dcd6804ac04c28574e5bf088348e9459121166e-800x800.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/18cffd876ecb5abec2d26637bea5dd549928029c-800x800.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/e080e19ff807ee022d04d04db072d9376d94da36-600x600.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp",
      ],
    },
    {
      id: 2,
      name: "Headphones",
      price: "$55",
      img: "https://cdn.sanity.io/images/ks2i9q1g/production/a099db30fab841ce69c573f7409251824748e490-600x600.webp",
      rating: 5,
      reviews: 18,
      details: "A second pair of headphones",
      images: [
        "https://cdn.sanity.io/images/ks2i9q1g/production/a099db30fab841ce69c573f7409251824748e490-600x600.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/797f8df56017feb72288e218fd6957ef068d7b44-700x700.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/04f8a489a3f3b726d8cf0709fbe561ff0ed82fad-900x900.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp",
      ],
    },
    {
      id: 3,
      name: "Speakers",
      price: "$99",
      img: "https://cdn.sanity.io/images/ks2i9q1g/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp",
      rating: 4,
      reviews: 32,
      details: "High-quality sound experience",
      images: [
        "https://cdn.sanity.io/images/ks2i9q1g/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/7d8e11aa468c951095577c0ecada75ad7d66313e-800x800.webp",
        "https://cdn.sanity.io/images/ks2i9q1g/production/157be1e12db1dab55141ee5935f7fe8b8887ced3-800x800.webp",
      ],
    },
    {
      id: 4,
      name: "Headphones",
      price: "$99",
      img: "https://cdn.sanity.io/images/ks2i9q1g/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp",
      rating: 3,
      reviews: 11,
      details: "Premium wireless headphones",
      images: [
        "https://cdn.sanity.io/images/ks2i9q1g/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp",
      ],
    },
  ];

  return (
    <section className="py-12 mb-20">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-[40px] font-extrabold text-[#324d67]">
          Best Selling Products
        </h2>
        <p className="text-gray-500 mt-2">Speakers of many variations</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-6 md:px-16 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
