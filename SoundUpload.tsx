import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const SoundUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Simulate upload to S3
      console.log(`Uploading ${file.name} to S3...`);
      // In a real app, we would send the file to the server here
      alert('Sound uploaded successfully!');
      setFile(null);
    }
  };

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Upload a New Sound</h2>
      <div className="mb-4">
        <label htmlFor="sound-file" className="block text-sm font-medium mb-2">
          Choose a sound file
        </label>
        <input
          type="file"
          id="sound-file"
          accept="audio/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-300
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-purple-600 file:text-white
            hover:file:bg-purple-700"
        />
      </div>
      <button
        onClick={handleUpload}
        disabled={!file}
        className="flex items-center justify-center w-full py-2 px-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Upload size={18} className="mr-2" />
        Upload Sound
      </button>
    </div>
  );
};

export default SoundUpload;