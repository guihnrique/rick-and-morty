import Link from 'next/link';
import Image from 'next/image';

export default async function Header() {
  return (
    <header className="container text-4xl text-outline-rick">
      <nav className="flex justify-between w-full">
        <Link href={'/'}>
          <Image
            src={'/images/logo.webp'}
            alt="Rick And Morty"
            width={300}
            height={100}
            priority
          />
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href={'/characters'}>Characters</Link>
          <Link href={'/locations'}>Locations</Link>
          <Link href={'/episodios'}>Episódios</Link>
        </div>
      </nav>
    </header>
  );
}
