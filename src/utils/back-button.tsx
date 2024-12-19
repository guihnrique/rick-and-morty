'use client';

export default function BackButton() {
  return (
    <button
      className="text-outline-rick rounded-full bg-black w-48 h-20 text-3xl text-white hover:bg-white border border-black my-4"
      onClick={() => window.history.back()}
    >
      Back
    </button>
  );
}
