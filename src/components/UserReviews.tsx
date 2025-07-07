'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function UserReviews() {
  const t = useTranslations('userreviews');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
    agreeTerms: false
  });
  
  const reviews = [
    {
      id: 1,
      name: "Alex_Gamer2024",
      rating: 5,
      date: "2024-01-15",
      review: t('reviews.review1.content'),
      avatar: "🎮"
    },
    {
      id: 2,
      name: "RPG_Master",
      rating: 5,
      date: "2024-01-10",
      review: t('reviews.review2.content'),
      avatar: "⚔️"
    },
    {
      id: 3,
      name: "MusicLover88",
      rating: 5,
      date: "2024-01-08",
      review: t('reviews.review3.content'),
      avatar: "🎵"
    },
    {
      id: 4,
      name: "StorySeeker",
      rating: 4,
      date: "2024-01-05",
      review: t('reviews.review4.content'),
      avatar: "📚"
    },
    {
      id: 5,
      name: "IndieGameFan",
      rating: 5,
      date: "2024-01-03",
      review: t('reviews.review5.content'),
      avatar: "💎"
    },
    {
      id: 6,
      name: "PixelArtist",
      rating: 5,
      date: "2024-01-01",
      review: t('reviews.review6.content'),
      avatar: "🎨"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"}>
        ★
      </span>
    ));
  };

  return (
    <section id="user-reviews" className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            {t('title')}
          </h2>
          <div className="w-24 h-0.5 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Overall Rating */}
        <div className="bg-black border border-gray-700 p-8 rounded-lg mb-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.8</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-400">{t('overall.rating')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">12.5K</div>
              <p className="text-gray-400">{t('overall.total_reviews')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">96%</div>
              <p className="text-gray-400">{t('overall.recommend')}</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-black border border-gray-700 p-6 rounded-lg hover:border-yellow-400 transition-colors">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{review.avatar}</div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* Rating Breakdown */}
        <div className="mt-12 bg-black border border-gray-700 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-6 font-mono text-center">
            {t('breakdown.title')}
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 w-20">
                  <span className="text-white">{stars}</span>
                  <span className="text-yellow-400">★</span>
                </div>
                <div className="flex-1 bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-yellow-400 h-3 rounded-full" 
                    style={{ 
                      width: stars === 5 ? '85%' : stars === 4 ? '12%' : stars === 3 ? '2%' : stars === 2 ? '1%' : '0%' 
                    }}
                  ></div>
                </div>
                <div className="text-gray-400 text-sm w-12">
                  {stars === 5 ? '85%' : stars === 4 ? '12%' : stars === 3 ? '2%' : stars === 2 ? '1%' : '0%'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comment Form */}
        <div className="mt-12">
          <div className="bg-black border border-gray-700 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 font-mono text-center">
              {t('write_review.title')}
            </h3>
            <form className="space-y-6" suppressHydrationWarning>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Share your DELTARUNE experience..."
                  rows={6}
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                ></textarea>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                  className="w-4 h-4 text-yellow-400 bg-gray-900 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
                />
                <label htmlFor="terms" className="text-gray-300 text-sm">
                  I&apos;d read and agree to the terms and conditions.
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-700 transition-colors"
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
