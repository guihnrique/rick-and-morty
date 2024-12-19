import getLocationsInfo from '@/actions/get-locations-info';
import ResidentsModal from '../modal/residents-modal';
import LocationsInfoBanner from './locations-info-banner';

export default async function Locations({ page }: { page: string }) {
  const { data } = await getLocationsInfo(page);

  if (data === null) {
    throw new Error('Erro ao receber os dados!');
  }

  return (
    <>
      <LocationsInfoBanner data={data} page={page} />
      <ul className="flex justify-between flex-wrap ">
        {data?.results.map((result, i) => (
          <li key={result.id + i} className="flex flex-col w-[31%] m-4 h-full">
            <div className="spiral-effect p-1 shadow-lg">
              <div className="rounded-lg overflow-hidden">
                <div className="px-6 py-4 bg-white mt-1 rounded-lg">
                  <h2 className="font-semibold text-gray-800">
                    Name: {result.name}
                  </h2>
                  <p>Type: {result.type}</p>
                  <p>Dimension: {result.dimension}</p>
                  <p>
                    Residents:
                    <ResidentsModal residents={result.residents} />
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
