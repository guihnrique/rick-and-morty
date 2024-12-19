import Locations from '@/components/locations/locations';
import Pagination from '@/components/pagination/pagination';

export default async function LocationsPaginationPage({
  params,
}: {
  params: { page: string };
}) {
  return (
    <div>
      <section className="flex flex-col items-center justify-center container flex-wrap">
        <Locations page={params.page} />
        <Pagination url={'/locations'} page={params.page} />
      </section>
    </div>
  );
}
