"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Eye } from "lucide-react";

const ProductCard = ({ product }) => {

  const discount = product.oldPrice
    ? Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
      )
    : null;

  return (
    <div className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl">
      
      {/* ===== Badges ===== */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-[#2EC1AC] text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase">
            New
          </span>
        )}
        {discount && (
          <span className="bg-[#E97171] text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase">
            -{discount}%
          </span>
        )}
      </div>

      {/* ===== Image Section ===== */}
      <div className="relative aspect-[4/5] w-full bg-[#F4F5F7] overflow-hidden">
        <Link href={`/cards/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={false}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          
          <button className="w-40 bg-white text-[#B88E2F] py-3 font-bold hover:bg-[#B88E2F] hover:text-white transition-colors flex items-center justify-center gap-2">
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          <div className="flex gap-4 text-white font-medium text-sm">
            <Link
              href={`/cards/${product.slug}`}
              className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors"
            >
              <Eye size={16} /> View
            </Link>
            <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="p-5 bg-[#F4F5F7]">
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
          {product.category}
        </p>

        <h3 className="text-xl font-bold text-[#3A3A3A] truncate mb-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star size={14} className="text-yellow-500" fill="currentColor" />
          <span className="ml-1 text-sm text-gray-600 font-semibold">
            {product.rating}
          </span>
          <span className="text-[12px] text-gray-400">
            ({product.reviewsCount} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-[#3A3A3A]">
            {product.currency === "USD" ? "$" : ""}
            {product.price}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-[#B0B0B0] line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
