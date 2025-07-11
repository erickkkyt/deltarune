import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Deltarune Online Hub',
  description: 'Latest news, updates, and in-depth articles about Deltarune, gaming guides, character analysis, and community discussions for RPG enthusiasts.',
  alternates: {
    canonical: 'https://deltarune.cc/blog',
  },
  openGraph: {
    title: 'Blog - Deltarune Online Hub',
    description: 'Latest news, updates, and in-depth articles about Deltarune, gaming guides, character analysis, and community discussions for RPG enthusiasts.',
    url: 'https://deltarune.cc/blog',
  },
};

// 示例博客文章数据
const blogPosts = [
  {
    id: 1,
    title: "Exploring DELTARUNE Online: Chapters 3 & 4 Deep Dive",
    excerpt: "Experience the latest DELTARUNE chapters online and discover what makes this free browser RPG so captivating. From TV gameshows to innovative RPG mechanics.",
    date: new Date().toLocaleDateString('en-US'),
    readTime: "5 min read",
    category: "Game Guide",
    slug: "deltarune-chapters-3-4"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 bg-black text-white">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog' }
          ]}
        />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white font-mono mb-4">
            DELTARUNE BLOG
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg mx-auto font-mono whitespace-nowrap">
            Explore the latest updates, game guides, and community news from the Deltarune world
          </p>
        </div>

        {/* Blog Categories */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-400 text-black px-4 py-2 font-mono font-bold text-sm">
            FEATURED ARTICLES
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Blog Posts */}
                     {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-900 border border-gray-800 p-8 hover:border-blue-400 transition-all">
              <div className="mb-6">
                <span className="bg-blue-400 text-black px-3 py-1 text-xs font-mono font-bold">
                  {post.category.toUpperCase()}
                </span>
              </div>
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-bold text-white font-mono mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-300 font-mono mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
              <div className="flex justify-between items-center border-t border-gray-800 pt-4">
                <div className="text-gray-400 text-sm font-mono">
                  <span>{post.date}</span>
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="btn-deltarune inline-block py-2 px-4 text-sm font-mono font-bold"
                >
                  READ ARTICLE →
                </Link>
              </div>
            </article>
          ))}
        </div>


      </main>

      <Footer />
    </div>
  );
} 