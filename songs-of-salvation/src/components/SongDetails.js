import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SongDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  // Sample song data - In real app, this would come from a backend
  const sampleSong = {
    id: 1,
    name: 'Amazing Grace',
    lyrics: `Amazing grace! How sweet the sound
That saved a wretch like me!
I once was lost, but now am found;
Was blind, but now I see.

'Twas grace that taught my heart to fear,
And grace my fears relieved;
How precious did that grace appear
The hour I first believed.`,
    composer: 'John Newton',
    language: 'English',
    date: '2024-03-15',
    audioUrl: '/sample-music.mp3', // This would be a real audio file path in production
    backgroundImage: 'https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-purple to-black p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Navigation */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 text-neon-green hover:text-white transition-colors duration-200"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Songs
        </button>

        {/* Song Header */}
        <div className="bg-gray-800 rounded-t-xl p-6 border-b border-neon-green">
          <h1 className="text-4xl font-bold text-neon-green mb-2">{sampleSong.name}</h1>
          <div className="flex items-center text-gray-400">
            <i className="fas fa-user mr-2"></i>
            <span>{sampleSong.composer}</span>
            <span className="mx-4">|</span>
            <i className="fas fa-language mr-2"></i>
            <span>{sampleSong.language}</span>
            <span className="mx-4">|</span>
            <i className="fas fa-calendar mr-2"></i>
            <span>{sampleSong.date}</span>
          </div>
        </div>

        {/* Audio Player */}
        <div className="bg-gray-800 p-6 border-b border-neon-green">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-neon-green text-black hover:bg-green-400 transition-colors duration-200"
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
            
            <div className="flex-1 flex items-center space-x-4">
              <i className="fas fa-volume-down text-neon-green"></i>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <i className="fas fa-volume-up text-neon-green"></i>
            </div>
          </div>
          <audio ref={audioRef} src={sampleSong.audioUrl} />
        </div>

        {/* Lyrics Section */}
        <div 
          className="bg-gray-800 rounded-b-xl p-6 relative min-h-[400px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${sampleSong.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-neon-green">Lyrics</h2>
            <div className="whitespace-pre-line text-lg leading-relaxed text-white">
              {sampleSong.lyrics}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;