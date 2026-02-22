import Link from 'next/link';
import { getSession } from '@/app/lib/utils/session';

export default async function Navbar() {
  const session = await getSession();

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'var(--card-background)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold no-underline"
          style={{ color: 'var(--foreground)' }}
        >
          <span>♟️</span>
          <span>Chess Trainer</span>
        </Link>

        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Link
                href="/profile"
                className="text-sm no-underline transition-colors hover:opacity-80"
                style={{ color: 'var(--foreground-muted)' }}
              >
                {session.firstName} {session.lastName}
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-sm no-underline transition-colors hover:opacity-80"
                style={{ color: 'var(--foreground-muted)' }}
              >
                Log in
              </Link>
              <Link
                href="/auth/signup"
                className="rounded-lg px-4 py-2 text-sm font-medium no-underline transition-colors hover:opacity-90"
                style={{
                  background: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
