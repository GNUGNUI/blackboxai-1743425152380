import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThemeChanger = () => {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState('default');

  const themes = [
    {
      id: 'default',
      name: 'Default',
      primary: 'rgb(57, 255, 20)', // neon-green
      secondary: 'rgb(26, 11, 46)', // deep-purple
      preview: 'bg-gradient-to-br from-deep-purple to-black border-neon-green'
    },
    {
      id: 'cosmic-purple',
      name: 'Cosmic Purple',
      primary: '#B14EFF',
      secondary: '#1A0B2E',
      preview: 'bg-gradient-to-br from-[#1A0B2E] to-black border-[#B14EFF]'
    },
    {
      id: 'electric-blue',
      name: 'Electric Blue',
      primary: '#00F0FF',
      secondary: '#0B1A2E',
      preview: 'bg-gradient-to-br from-[#0B1A2E] to-black border-[#00F0FF]'
    },
    {
      id: 'sunset-orange',
      name: 'Sunset Orange',
      primary: '#FF6B4E',
      secondary: '#2E0B0B',
      preview: 'bg-gradient-to-br from-[#2E0B0B] to-black border-[#FF6B4E]'
    },
    {
      id: 'cyber-yellow',
      name: 'Cyber Yellow',
      primary: '#FFE600',
      secondary: '#2E2E0B',
      preview: 'bg-gradient-to-br from-[#2E2E0B] to-black border-[#FFE600]'
    },
    {
      id: 'neon-pink',
      name: 'Neon Pink',
      primary: '#FF00E6',
      secondary: '#2E0B2E',
      preview: 'bg-gradient-to-br from-[#2E0B2E] to-black border-[#FF00E6]'
    }
  ];

  const handleThemeChange = (themeId) => {
    setSelectedTheme(themeId);
    // In a real app, this would update the global theme state
    // and persist the selection
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-purple to-black p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="text-neon-green hover:text-white transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Home
          </button>
        </div>

        {/* Theme Selection */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
          <h1 className="text-3xl font-bold text-neon-green mb-6">
            Choose Your Theme
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`rounded-xl p-6 cursor-pointer transform transition-all duration-200 ${
                  selectedTheme === theme.id
                    ? 'scale-105 ring-2'
                    : 'hover:scale-105'
                } ${theme.preview}`}
                onClick={() => handleThemeChange(theme.id)}
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Theme Preview */}
                  <div className="w-full aspect-video rounded-lg bg-gray-900 p-4 flex flex-col justify-between">
                    {/* Header Preview */}
                    <div className="w-1/2 h-4 rounded" style={{ backgroundColor: theme.primary }}></div>
                    {/* Content Preview */}
                    <div className="space-y-2">
                      <div className="w-3/4 h-3 rounded bg-gray-700"></div>
                      <div className="w-2/3 h-3 rounded bg-gray-700"></div>
                    </div>
                  </div>

                  {/* Theme Name */}
                  <div className="text-center">
                    <h3 className="font-semibold" style={{ color: theme.primary }}>
                      {theme.name}
                    </h3>
                  </div>

                  {/* Selection Indicator */}
                  {selectedTheme === theme.id && (
                    <div
                      className="flex items-center justify-center text-black rounded-full w-8 h-8"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <i className="fas fa-check"></i>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Apply Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 rounded-lg bg-neon-green text-black hover:bg-green-400 transition-colors duration-200 font-semibold"
            >
              Apply Theme
            </button>
          </div>

          {/* Theme Info */}
          <div className="mt-8 text-gray-400 text-center">
            <p>
              <i className="fas fa-info-circle mr-2"></i>
              Theme changes will be saved and applied across all pages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;