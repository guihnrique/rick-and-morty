import { Location } from '@/types/location';
import Image from 'next/image';

export default function LocationsInfoBanner({
  data,
  page,
}: {
  data: Location;
  page: string;
}) {
  if (Number(page) < 2 || isNaN(Number(page))) {
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
        Count Locations: {data?.info.count}
      </p>
      <p className="text-2xl text-outline-rick">Pages: {data?.info.pages}</p>
    </div>
  );
}
