import { Character } from '@/types/character';
import Image from 'next/image';

export default function CharactersInfoBanner({
  data,
  page,
}: {
  data: Character;
  page: string;
}) {
  if (page === '' || page === '0') {
    page = '1';
  }

  return (
    <div className="flex w-full justify-between flex-row bg-black/75 container h-20 items-center !my-8 rounded-full">
      <Image
        src={'/images/characters-image.png'}
        alt="Rick and Morty"
        width={200}
        height={200}
      />
      <p className="text-2xl text-outline-rick">Actual Page: {page}</p>
      <p className="text-2xl text-outline-rick">
        Count Characters: {data?.info.count}
      </p>
      <p className="text-2xl text-outline-rick">Pages: {data?.info.pages}</p>
    </div>
  );
}
