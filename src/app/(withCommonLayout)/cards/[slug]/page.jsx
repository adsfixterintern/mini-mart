"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import products from "../../../../../public/products.json";
import Container from "@/components/shared/Container";
import { Star, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Productdetails = () => {
  const { slug } = useParams();
  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  // check if product already in cart
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-[#F4F5F7]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
              {product.category}
            </p>

            <h1 className="text-4xl font-extrabold text-[#3A3A3A] mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <Star size={16} className="text-yellow-500" fill="currentColor" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-sm text-gray-400">
                ({product.reviewsCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-[#B88E2F]">
                ${product.price}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {product.details}
            </p>

            {/* Cart Actions */}
            {!cartItem ? (
              /* Add to cart */
              <button
                onClick={() => addToCart(product)}
                className="flex items-center gap-3 bg-[#B88E2F] text-white px-10 py-4 font-bold hover:bg-[#a57f28] transition"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            ) : (
              /* Quantity + Remove */
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 border px-4 py-2">
                  <button onClick={() => decreaseQty(product.id)}>
                    <Minus />
                  </button>

                  <span className="font-bold text-lg">
                    {cartItem.quantity}
                  </span>

                  <button onClick={() => increaseQty(product.id)}>
                    <Plus />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="flex items-center gap-2 text-red-500 hover:text-red-700 font-semibold"
                >
                  <Trash2 size={18} />
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Productdetails;
