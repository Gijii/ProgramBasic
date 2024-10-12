import React, { useState } from 'react';
import { Headphones } from 'lucide-react';

const mockSuggestions = [
  'Cyberpunk Cityscape',
  '8-bit Adventure Theme',
  'Neon Nights Ambience',
];

const SoundSuggestions: React.FC = () => {
  const [preferences, setPreferences] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handlePreferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setPreferences([...preferences, value]);
    } else {
      setPreferences(preferences.filter((pref) => pref !== value));
    }
  };

  const getSuggestions = () => {
    // Simulate AI suggestion process
    console.log('Getting suggestions based on:', preferences);
    // In a real app, we would send preferences to the server and get real suggestions
    setSuggestions(mockSuggestions);
  };

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Get AI Suggestions</h2>
      <div className="mb-4">
        <p className="mb-2">Select your preferences:</p>
        <div className="space-y-2">
          {['synthwave', 'chiptune', 'vaporwave'].map((genre) => (
            <label key={genre} className="flex items-center">
              <input
                type="checkbox"
                value={genre}
                onChange={handlePreferenceChange}
                className="mr-2"
              />
              {genre}
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={getSuggestions}
        disabled={preferences.length === 0}
        className="flex items-center justify-center w-full py-2 px-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
      >
        <Headphones size={18} className="mr-2" />
        Get Suggestions
      </button>
      {suggestions.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Suggested Sounds:</h3>
          <ul className="list-disc list-inside">
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SoundSuggestions;