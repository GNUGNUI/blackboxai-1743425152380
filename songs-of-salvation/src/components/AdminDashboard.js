import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SongUpload from './SongUpload';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('songs');
  const [songs, setSongs] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Check if user is authenticated
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/login');
    }
  }, [navigate]);

  // Sample songs data - In real app, this would come from a backend
  useEffect(() => {
    setSongs([
      {
        id: 1,
        name: 'Amazing Grace',
        composer: 'John Newton',
        language: 'English',
        date: '2024-03-15',
        tags: ['Hymn', 'Classic']
      },
      {
        id: 2,
        name: 'How Great Thou Art',
        composer: 'Carl Boberg',
        language: 'English',
        date: '2024-03-14',
        tags: ['Worship', 'Classic']
      }
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-purple to-black">
      {/* Admin Header */}
      <header className="bg-gray-800 border-b border-neon-green">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-neon-green">
              Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
            >
              <i className="fas fa-sign-out-alt mr-2"></i>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'songs'
                ? 'bg-neon-green text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab('songs')}
          >
            <i className="fas fa-music mr-2"></i>
            Songs
          </button>
          <button
            className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'settings'
                ? 'bg-neon-green text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            <i className="fas fa-cog mr-2"></i>
            Settings
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-gray-800 rounded-xl p-6">
          {activeTab === 'songs' ? (
            <div>
              {/* Song Upload Section */}
              <div className="mb-8">
                <button
                  onClick={() => setIsUploading(true)}
                  className="px-6 py-3 rounded-lg bg-neon-green text-black hover:bg-green-400 transition-colors duration-200"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Add New Song
                </button>
              </div>

              {/* Songs List */}
              <div className="space-y-4">
                {songs.map((song) => (
                  <div
                    key={song.id}
                    className="bg-gray-700 rounded-lg p-4 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {song.name}
                      </h3>
                      <p className="text-gray-400">
                        <i className="fas fa-user mr-2"></i>
                        {song.composer}
                      </p>
                      <div className="flex space-x-2 mt-2">
                        {song.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 rounded-full bg-gray-600 text-xs text-neon-green"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors duration-200">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {/* Settings Content */}
              <div className="space-y-6">
                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neon-green mb-4">
                    App Settings
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-400 mb-2">App Logo</label>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                          <i className="fas fa-image text-2xl text-gray-400"></i>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500 transition-colors duration-200">
                          Upload New Logo
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">
                        Color Theme
                      </label>
                      <select className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-neon-green">
                        <option value="default">Default (Neon Green)</option>
                        <option value="blue">Neon Blue</option>
                        <option value="purple">Neon Purple</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neon-green mb-4">
                    Tag Management
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Christmas', 'Easter', 'Worship', 'Hymn', 'Classic'].map(
                      (tag, index) => (
                        <div
                          key={index}
                          className="px-3 py-1 rounded-full bg-gray-600 text-white flex items-center space-x-2"
                        >
                          <span>{tag}</span>
                          <button className="text-red-400 hover:text-red-300">
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      )
                    )}
                    <button className="px-3 py-1 rounded-full bg-gray-600 text-neon-green hover:bg-gray-500 transition-colors duration-200">
                      <i className="fas fa-plus mr-1"></i>
                      Add Tag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {isUploading && (
        <SongUpload onClose={() => setIsUploading(false)} />
      )}
    </div>
  );
};

export default AdminDashboard;