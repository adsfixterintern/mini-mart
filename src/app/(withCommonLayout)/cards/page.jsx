"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './_component/ProductCard';
import Container from '@/components/shared/Container';


const Cards = () => {
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('/products.json');
            if (!res.ok) throw new Error("Failed to fetch products");
            return res.json();
        }
    });

    return (
        <section className="py-20 bg-white">
            <Container>
                {/* Standard Heading */}
                <div className="flex flex-col items-center mb-16">
                    <h4 className="text-[#616161] font-medium tracking-[0.3em] uppercase mb-2">
                        Trendsetter
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A3A3A] text-center">
                        Our Best Products
                    </h2>
                    <div className="w-24 h-1.5 bg-[#B88E2F] mt-6 rounded-full"></div>
                </div>

                {/* Grid Handling */}
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-[450px] bg-gray-100 animate-pulse rounded-sm" />
                        ))}
                    </div>
                ) : isError ? (
                    <div className="text-center py-10 text-red-500">Something went wrong.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products?.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                )}

                {/* Action Button */}
                <div className="mt-16 text-center">
                    <button className="px-12 py-4 border-2 border-[#B88E2F] text-[#B88E2F] font-bold text-sm uppercase tracking-widest hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
                        View All Collections
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default Cards;