import Link from 'next/link';

export default async function Pagination({ page }: { page: string }) {
  if (Number(page) < 2 || isNaN(Number(page))) {
    page = '1';
  }
  const prevValue = Number(page) - 1;
  const nextValue = Number(page) + 1;
  return (
    <div className="w-full container flex justify-between !mb-8">
      {Number(page) > 1 && (
        <Link href={`/characters/${prevValue}`}>
          <button className="rounded-full bg-black w-48 h-20 text-3xl text-outline-rick hover:bg-white">
            Prev
          </button>
        </Link>
      )}
      <Link href={`/characters/${nextValue}`}>
        <button className="rounded-full bg-black w-48 h-20 text-3xl text-outline-rick hover:bg-white">
          Next
        </button>
      </Link>
    </div>
  );
}
