"use client";
import Link from "next/link";
import { RocketIcon } from "lucide-react";
import { Header, Footer } from "@/components/layout";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {" "}
      <Header />
      <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="opacity-55 absolute -top-[45%] border-2 -right-[5%] w-[50%] h-[80%] rounded-full rotate-12 bg-gradient-to-br from-orange-400/10 to-orange-500/10 blur-[80px]" />
          <div className="opacity-55 absolute top-[35%] -left-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-[90px]" />
          <div className="absolute top-[35%] -right-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 blur-[90px]" />
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-8xl font-black text-center bg-gradient-to-l from-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
                404
              </h1>
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-slate-800/70 mb-8">
                Oops! The page you're looking for doesn't exist or has been
                moved.
              </p>
              <Link
                href="/"
                className="btn text-sm inline-flex items-center text-white px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <RocketIcon size={16} className="mr-2" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
