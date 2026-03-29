import Link from "next/link";
import Image from "next/image";
import { Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 group mb-6">
            <span className="font-bold text-xl tracking-tight">
              JJ Painting & Hardwares
            </span>
          </Link>
          <p className="text-zinc-500 max-w-sm mb-6">
            Providing premium quality materials, hardwares, and professional painting tools for every home and commercial project. Built to last.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 text-xs">
            <Wrench className="w-3 h-3 text-red-500" />
            <span>Since 2026</span>
          </div>
        </div>

        <div>
          <h4 className="text-zinc-100 font-semibold mb-6">Navigation</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-red-500 transition-colors">Products Catalog</Link></li>
            <li><Link href="/#about" className="hover:text-red-500 transition-colors">About Us</Link></li>
            <li><Link href="/#projects" className="hover:text-red-500 transition-colors">Past Projects</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="text-zinc-100 font-semibold mb-6">Contact Us</h4>
           <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-zinc-300 mt-0.5">📍</span>
              <div className="flex flex-col">
                <span>KVB ATM opposite, Main road,</span>
                <span>Kella Surandai, Tenkasi</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-300 mt-0.5">📱</span>
              <div className="flex flex-col">
                <span>+91 97864 43002</span>
                <span>+91 98651 31514</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-zinc-300">✉️</span>
              jjpaintingconsulting@gmail.com
            </li>
           </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} JJ Painting & Hardwares. All rights reserved.</p>
      </div>
    </footer>
  );
}
