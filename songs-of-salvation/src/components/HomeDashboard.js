import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  // Sample data - In real app, this would come from a backend
  const languages = ['Bengali', 'English', 'Hindi', 'Bodo', 'Nepali'];
  const tags = ['Christmas', 'Good Friday', 'Easter Sunday', 'Sunday School Day', 'New Year'];
  
  const sampleSongs = [
    { id: 1, name: 'Amazing Grace', composer: 'John Newton', language: 'English', date: '2024-03-15' },
    { id: 2, name: 'How Great Thou Art', composer: 'Carl Boberg', language: 'English', date: '2024-03-14' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-neon-green animate-pulse-slow">
          Songs of Salvation
        </h1>
        <p className="text-xl text-gray-300">Your Divine Musical Journey</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search songs..."
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <i className="fas fa-search absolute right-4 top-4 text-neon-green"></i>
        </div>
      </div>

      {/* Language Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedLanguage === 'all'
              ? 'bg-neon-green text-black'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
          onClick={() => setSelectedLanguage('all')}
        >
          All
        </button>
        {languages.map((lang) => (
          <button
            key={lang}
            className={`px-4 py-2 rounded-full ${
              selectedLanguage === lang
                ? 'bg-neon-green text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Tags */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {tags.map((tag) => (
          <div
            key={tag}
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-gray-800 p-4 rounded-lg border border-neon-green shadow-neon text-center cursor-pointer hover:bg-gray-700">
              <span className="text-neon-green">
                <i className="fas fa-tag mr-2"></i>
                {tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Songs */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-neon-green">
          <i className="fas fa-clock mr-2"></i>
          Recent Additions
        </h2>
        <div className="grid gap-4">
          {sampleSongs.map((song) => (
            <Link
              key={song.id}
              to={`/song/${song.id}`}
              className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{song.name}</h3>
                  <p className="text-gray-400">
                    <i className="fas fa-user mr-2"></i>
                    {song.composer}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-400">{song.language}</span>
                  <p className="text-xs text-neon-green">{song.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Admin Login Link */}
      <div className="text-center">
        <Link
          to="/login"
          className="inline-flex items-center text-neon-green hover:text-white transition-colors duration-200"
        >
          <i className="fas fa-lock mr-2"></i>
          Admin Login
        </Link>
      </div>
    </div>
  );
};

export default HomeDashboard;