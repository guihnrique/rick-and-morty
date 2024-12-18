import Characters from '@/components/characters/characters';
import Pagination from '@/components/pagination/pagination';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Characters | Ricky and Morty',
};

export default async function CharactersPaginationPage({
  params,
}: {
  params: { page: string };
}) {
  return (
    <section className="flex flex-col items-center justify-center container flex-wrap">
      <Characters page={params.page} />
      <Pagination page={params.page} />
    </section>
  );
}
