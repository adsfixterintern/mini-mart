import React from "react";
import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b">
      <Container>
        <nav className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-blue-900 cursor-pointer">
              Furniture
            </h1>
          </Link>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-900">
                Services
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="hover:text-blue-900">
                Doctors
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-900">
                Products
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-blue-900">
                Gallery
              </Link>
            </li>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link href="/Login">
              <button className="px-6 py-2 border border-blue-900 text-blue-900 font-semibold hover:bg-blue-900 hover:text-white transition">
                Login
              </button>
            </Link>
          </div>

        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
