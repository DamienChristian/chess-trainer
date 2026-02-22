'use client';

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        background: 'var(--background)',
      }}
    >
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1
            className="mb-6 text-6xl font-bold"
            style={{ color: 'var(--foreground)' }}
          >
            ♟️ Chess Trainer
          </h1>
          <p
            className="mb-8 text-xl"
            style={{ color: 'var(--foreground-muted)' }}
          >
            Import PGN studies and master your chess moves
          </p>
        </div>
      </main>
    </div>
  );
}
