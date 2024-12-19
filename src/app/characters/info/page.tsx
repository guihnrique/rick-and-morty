import CharacterDescription from '@/components/characters/chacacter-description';
import { Metadata } from 'next';
import BackButton from '@/utils/back-button';

export const metadata: Metadata = {
  title: 'Characters Info | Ricky and Morty',
};

export default async function CharactersInfoPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  return (
    <section className="flex flex-col items-center justify-center container flex-wrap">
      <CharacterDescription id={searchParams.id} />
      <BackButton />
    </section>
  );
}
