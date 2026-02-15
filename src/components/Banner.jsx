import React from "react";
import Image from "next/image";
import BannerImage from "../app/assets/img/scandinavian-interior-mockup-wall-decal-background 1.png";
import Container from "./shared/Container";
import { Truck, Headset, ShieldCheck } from "lucide-react";

const Banner = () => {
  return (
    <div>
      {/* ===== Banner Section ===== */}
      <Container>
        <section className="relative w-full pt-6">
          <div className="relative min-h-[500px] md:h-[650px] w-full overflow-hidden rounded-xl">
            <Image
              src={BannerImage}
              alt="Scandinavian Interior Collection"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* Floating Card */}
            <div className="absolute right-4 top-1/2 z-10 w-[92%] -translate-y-1/2 rounded-lg bg-[#DFE9F4]/95 p-8 shadow-xl backdrop-blur-sm md:right-10 md:w-[480px] lg:p-14">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#333333]">
                New Arrival
              </span>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-[#054C73] md:text-5xl">
                Discover Our <br /> New Collection
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#333333]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="mt-10 bg-[#054C73] px-12 py-5 text-sm font-bold text-white transition-all hover:bg-[#033a58] hover:shadow-lg active:scale-95">
                BUY NOW
              </button>
            </div>
          </div>
        </section>
      </Container>

      {/* ===== Features Bar (Middle Section) ===== */}
      <section className="bg-[#F2F5FF] py-14">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            
            <div className="flex items-center gap-5">
              <Truck size={48} strokeWidth={1.5} />
              <div>
                <h4 className="text-lg font-bold text-[#333333]">Free Delivery</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Headset size={48} strokeWidth={1.5} />
              <div>
                <h4 className="text-lg font-bold text-[#333333]">Support 24/7</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <ShieldCheck size={48} strokeWidth={1.5} />
              <div>
                <h4 className="text-lg font-bold text-[#333333]">100% Authentic</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
