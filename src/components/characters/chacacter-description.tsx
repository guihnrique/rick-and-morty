import getCharacterInfo from '@/actions/get-character-info';
import EpisodesModal from '../modal/episodes-modal';
import Image from 'next/image';

export default async function DataDescription({ id }: { id: string }) {
  const { data } = await getCharacterInfo(id);

  if (!data) {
    throw new Error('Character not found.');
  }

  return (
    <>
      <div className="flex w-full bg-black/75 container h-20 items-center !my-8 rounded-full">
        <Image
          src={'/images/characters-image.png'}
          alt="Rick and Morty"
          width={200}
          height={200}
        />
        <p className="text-2xl text-outline-rick pl-[32%]">Character Info</p>
      </div>
      <div className="spiral-effect p-1 shadow-lg">
        <div className="rounded-lg overflow-hidden">
          <Image
            className="justify-self-center"
            src={data.image}
            alt={data.name}
            width={400}
            height={400}
          />
          <div className="p-6 bg-white mt-1">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              {data.name}
            </h2>
            <ul className="space-y-3 text-gray-700 text-3xl">
              <li>
                <strong>Status:</strong> {data.status}
              </li>
              <li>
                <strong>Species:</strong> {data.species}
              </li>
              <li>
                <strong>Gender:</strong> {data.gender}
              </li>
              <li>
                <strong>Type:</strong> {data.type || 'N/A'}
              </li>
              <li>
                <strong>Location:</strong> {data.location.name}
              </li>
              <li>
                <strong>Episodes:</strong>{' '}
                <EpisodesModal episodes={data.episode} />
              </li>
              <li>
                <strong>Created At:</strong>{' '}
                {new Date(data.created).toLocaleString()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
