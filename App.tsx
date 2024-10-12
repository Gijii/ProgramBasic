import React, { useState } from 'react';
import { Upload, Music, Headphones } from 'lucide-react';
import SoundUpload from './components/SoundUpload';
import SoundList from './components/SoundList';
import SoundSuggestions from './components/SoundSuggestions';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
      <header className="bg-black bg-opacity-30 p-4">
        <h1 className="text-3xl font-bold text-center">Retro Sound Explorer</h1>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SoundUpload />
          <SoundList />
          <SoundSuggestions />
        </div>
      </main>
      <footer className="mt-12 text-center text-sm text-purple-300">
        <p>&copy; 2024 Retro Sound Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;