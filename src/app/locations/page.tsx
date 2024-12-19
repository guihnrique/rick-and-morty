import Locations from '@/components/locations/locations';
import Pagination from '@/components/pagination/pagination';

export default async function LocationsPage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center container flex-wrap">
        <Locations page={''} />
        <Pagination url={'/locations'} page={'1'} />
      </section>
    </div>
  );
}
