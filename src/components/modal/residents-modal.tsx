'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Resident {
  name: string;
  image: string;
  id: string;
}

interface ResidentsModalProps {
  residents: string[];
}

export default function ResidentsModal({ residents }: ResidentsModalProps) {
  const [residentData, setResidentData] = useState<Record<string, Resident>>(
    {},
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen && residents.length > 0) {
      setLoading(true);
      const fetchAllResidents = async () => {
        try {
          const fetchedData: Record<string, Resident> = {};
          for (const url of residents) {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Error fetching resident data: ${url}`);
            }
            const data = await response.json();
            fetchedData[url] = {
              name: data.name,
              image: data.image,
              id: data.id,
            };
          }
          setResidentData(fetchedData);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchAllResidents();
    }
  }, [isModalOpen, residents]);

  return (
    <>
      <button
        className="bg-black text-white py-1 px-4 rounded hover:bg-green-500 hover:text-black"
        onClick={() => setIsModalOpen(true)}
      >
        View Residents
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Residents: ({residents.length})
            </h3>

            {loading ? (
              <p className="text-gray-500">Loading residents...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {residents.map((res, index) => {
                  const resident = residentData[res];
                  return (
                    <div
                      key={index}
                      className="bg-black text-white py-2 px-4 rounded flex flex-col items-center hover:bg-green-500 hover:text-black"
                    >
                      {resident ? (
                        <>
                          <Link href={`/characters/info?id=${resident.id}`}>
                            <Image
                              src={resident.image}
                              alt={resident.name}
                              width={100}
                              height={100}
                              className="rounded-full mb-2"
                            />
                            <p>{resident.name}</p>
                          </Link>
                        </>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

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
