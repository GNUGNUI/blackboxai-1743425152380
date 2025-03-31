import React, { useState } from 'react';

const SongUpload = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    composer: '',
    language: 'English',
    lyrics: '',
    tags: [],
    audioFile: null,
    backgroundImage: null
  });

  const languages = ['Bengali', 'English', 'Hindi', 'Bodo', 'Nepali'];
  const availableTags = ['Christmas', 'Good Friday', 'Easter Sunday', 'Sunday School Day', 'New Year', 'Worship', 'Hymn', 'Classic'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleTagToggle = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would handle the form submission
    // For now, just log the data and close the modal
    console.log('Form Data:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-neon-green">
              Upload New Song
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Song Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-neon-green"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Composer</label>
              <input
                type="text"
                name="composer"
                value={formData.composer}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-neon-green"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-neon-green"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Lyrics */}
          <div>
            <label className="block text-gray-400 mb-2">Lyrics</label>
            <textarea
              name="lyrics"
              value={formData.lyrics}
              onChange={handleInputChange}
              rows="6"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-neon-green"
              required
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-400 mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full ${
                    formData.tags.includes(tag)
                      ? 'bg-neon-green text-black'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  } transition-colors duration-200`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* File Uploads */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Audio File</label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => handleFileChange(e, 'audioFile')}
                  className="hidden"
                  id="audio-upload"
                  required
                />
                <label
                  htmlFor="audio-upload"
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                >
                  <i className="fas fa-music mr-2"></i>
                  Choose Audio File
                </label>
                {formData.audioFile && (
                  <span className="text-gray-400">
                    {formData.audioFile.name}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Background Image</label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'backgroundImage')}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                >
                  <i className="fas fa-image mr-2"></i>
                  Choose Image
                </label>
                {formData.backgroundImage && (
                  <span className="text-gray-400">
                    {formData.backgroundImage.name}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-neon-green text-black hover:bg-green-400 transition-colors duration-200"
            >
              Upload Song
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SongUpload;