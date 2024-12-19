'use client';

import { useState } from 'react';

interface EpisodesModalProps {
  episodes: string[];
}

export default function EpisodesModal({ episodes }: EpisodesModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="bg-black text-white py-1 px-4 rounded hover:bg-green-500 hover:text-black"
        onClick={() => setIsModalOpen(true)}
      >
        View Episodes
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Episodes ({episodes.length})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {episodes.map((ep, index) => (
                <button
                  key={index}
                  className="bg-black text-white py-1 px-4 rounded hover:bg-green-500 hover:text-black"
                  onClick={() => window.open(ep, '_blank')}
                >
                  Episode {index + 1}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
