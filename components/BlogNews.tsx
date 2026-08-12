"use client";

import { BLOG_POSTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const BlogNews = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-container px-6 lg:px-20 3xl:px-0">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-900/40">
              Outdoor Journal & Guides
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-3">
              Wilderness Insights & Eco-Hiking Guides
            </h2>
          </div>
          <Link href="/about">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
              Read Our Mission & Charter →
            </span>
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span>• {post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4">
                    {post.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Full Article <span>→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogNews;
