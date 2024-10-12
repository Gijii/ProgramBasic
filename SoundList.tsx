import React from 'react';
import { Music } from 'lucide-react';

const mockSounds = [
  { id: 1, name: 'Synthwave Beat', url: '#' },
  { id: 2, name: 'Retro Game SFX', url: '#' },
  { id: 3, name: 'Vaporwave Loop', url: '#' },
];

const SoundList: React.FC = () => {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">My Sounds</h2>
      <ul className="space-y-2">
        {mockSounds.map((sound) => (
          <li key={sound.id} className="flex items-center p-2 bg-purple-800 bg-opacity-50 rounded">
            <Music size={18} className="mr-2" />
            <span>{sound.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoundList;