'use client';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: "How Baseline Profiles Reduced My App Cold Start by 68%",
    date: "April 8, 2025",
    readTime: "15 min",
    excerpt: "Real senior-level performance engineering using Macrobenchmark and ProfileInstaller.",
    link: "https://github.com/Moekyawaung-coder/senior-technical-blog-v2/blob/main/articles/baseline-profiles.md"
  },
  {
    title: "Why I Chose Kotlin Multiplatform Over Flutter in 2025",
    date: "April 5, 2025",
    readTime: "12 min",
    excerpt: "Deep comparison from a Senior Android Engineer perspective.",
    link: "https://github.com/Moekyawaung-coder/senior-technical-blog-v2/blob/main/posts/why-kmp-2025.md"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 mb-6">
          Senior Technical Blog
        </h1>
        <p className="text-2xl text-zinc-400 mb-16">Insights from my journey to Senior Android Engineer</p>

        <div className="space-y-10">
          {blogPosts.map((post, index) => (
            <div key={index} className="group bg-zinc-900 border border-green-500/30 hover:border-green-400 rounded-3xl p-10 transition-all duration-300">
              <div className="flex items-center gap-6 text-sm text-zinc-500 mb-6">
                <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /> {post.date}</div>
                <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> {post.readTime}</div>
              </div>
              <h2 className="text-4xl font-semibold mb-6 group-hover:text-green-400 transition">{post.title}</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">{post.excerpt}</p>
              <Link href={post.link} target="_blank" 
                    className="inline-flex items-center gap-3 text-green-400 text-lg font-medium group-hover:gap-5 transition-all">
                Read Full Article <ArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
