import Characters from '@/components/characters/characters';
import Pagination from '@/components/pagination/pagination';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Characters | Ricky and Morty',
};

export default async function CharactersPage() {
  return (
    <section className="flex flex-col items-center justify-center container flex-wrap">
      <Characters page={''} />
      <Pagination page={'1'} />
    </section>
  );
}
