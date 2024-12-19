import getCharactersInfo from '@/actions/get-characters-info';
import Image from 'next/image';
import CharactersInfoBanner from './characters-info-banner';
import Link from 'next/link';

export default async function Characters({ page }: { page: string }) {
  const { data } = await getCharactersInfo(page);

  if (data === null) {
    throw new Error('Erro ao receber os dados!');
  }

  return (
    <>
      <CharactersInfoBanner data={data} page={page} />
      <ul className="flex justify-between flex-wrap ">
        {data?.results.map((result, i) => (
          <li key={result.id + i} className="flex flex-col w-[22%] m-4 h-full">
            <div className="spiral-effect p-1 shadow-lg">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={result.image}
                  alt={result.name}
                  width={500}
                  height={500}
                />
                <div className="px-6 py-4 bg-white mt-1 rounded-lg">
                  <h2 className="font-semibold text-gray-800">
                    Name: {result.name}
                    <p>Status: {result.status}</p>
                    <p>Species: {result.species}</p>
                    <p>Gender: {result.gender}</p>
                  </h2>
                </div>
                <div className="py-4 flex justify-center">
                  <Link href={`/characters/info?id=${result.id}`}>
                    <button className="bg-black text-white py-1 px-4 rounded hover:bg-white hover:text-black">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
